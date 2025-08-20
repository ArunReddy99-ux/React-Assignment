import React, { useMemo, useState } from 'react';
import { clsx } from 'clsx';

// Column describes one visible column in the table
export interface Column<T> {
	key: string;
	title: string;
	dataIndex: keyof T;
	sortable?: boolean;
}

// DataTableProps is the public API for the generic DataTable component
export interface DataTableProps<T> {
	data: T[];
	columns: Column<T>[];
	loading?: boolean;
	selectable?: boolean; // enables row select
	selectionMode?: 'single' | 'multiple';
	onRowSelect?: (selectedRows: T[]) => void;
	rowKey?: (row: T, index: number) => string | number;
	className?: string;
}

type SortState<T> = { columnKey: string; direction: 'asc' | 'desc' } | null;

/**
 * DataTable displays tabular data with optional sorting and row selection.
 * - Sorting is handled in-memory with a shallow compare
 * - Selection supports single (radio) and multiple (checkbox) modes
 */
export function DataTable<T extends Record<string, unknown>>({
	data,
	columns,
	loading = false,
	selectable = false,
	selectionMode = 'multiple',
	onRowSelect,
	rowKey,
	className
}: DataTableProps<T>) {
	const [sort, setSort] = useState<SortState<T>>(null);
	const [selected, setSelected] = useState<Set<number>>(new Set());

	const sortedData = useMemo(() => {
		if (!sort) return data;
		const col = columns.find(c => c.key === sort.columnKey);
		if (!col) return data;
		const sorted = [...data].sort((a, b) => {
			const av = a[col.dataIndex];
			const bv = b[col.dataIndex];
			if (av == null && bv == null) return 0;
			if (av == null) return -1;
			if (bv == null) return 1;
			if (av < bv) return sort.direction === 'asc' ? -1 : 1;
			if (av > bv) return sort.direction === 'asc' ? 1 : -1;
			return 0;
		});
		return sorted;
	}, [data, sort, columns]);

	const toggleSort = (column: Column<T>) => {
		if (!column.sortable) return;
		setSort(prev => {
			if (!prev || prev.columnKey !== column.key) return { columnKey: column.key, direction: 'asc' };
			return { columnKey: column.key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
		});
	};

	const isMultiple = selectionMode === 'multiple';
	const allSelected = selectable && isMultiple && selected.size === data.length && data.length > 0;
	// Toggle all rows for multi-select only
	const toggleAll = () => {
		if (!selectable || !isMultiple) return;
		setSelected(prev => {
			if (prev.size === data.length) return new Set();
			return new Set(data.map((_, idx) => idx));
		});
	};

	// Toggle one row; replaces selection when in single-select mode
	const toggleRow = (index: number) => {
		if (!selectable) return;
		setSelected(prev => {
			if (isMultiple) {
				const next = new Set(prev);
				if (next.has(index)) next.delete(index);
				else next.add(index);
				return next;
			}
			// single selection
			return prev.has(index) ? new Set() : new Set([index]);
		});
	};

	React.useEffect(() => {
		if (!onRowSelect) return;
		onRowSelect(Array.from(selected).map(i => data[i]));
	}, [selected, onRowSelect, data]);

	return (
		<div className={clsx('w-full overflow-x-auto', className)}>
			<table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-md">
				<thead className="bg-gray-50 dark:bg-gray-800">
					<tr>
						{selectable && isMultiple && (
							<th scope="col" className="p-2 text-left w-10">
								<input
									aria-label="Select all rows"
									type="checkbox"
									checked={allSelected}
									onChange={toggleAll}
								/>
							</th>
						)}
						{columns.map(col => (
							<th key={col.key} scope="col" className="p-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
								<button
									type="button"
									onClick={() => toggleSort(col)}
									className={clsx('flex items-center gap-1', col.sortable ? 'cursor-pointer' : 'cursor-default')}
									aria-label={col.sortable ? `Sort by ${col.title}` : undefined}
								>
									{col.title}
									{sort?.columnKey === col.key && (
										<span aria-hidden>{sort.direction === 'asc' ? '▲' : '▼'}</span>
									)}
								</button>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{loading ? (
						<tr>
							<td colSpan={(selectable ? 1 : 0) + columns.length} className="p-6 text-center text-sm text-gray-500">
								Loading...
							</td>
						</tr>
					) : sortedData.length === 0 ? (
						<tr>
							<td colSpan={(selectable ? 1 : 0) + columns.length} className="p-6 text-center text-sm text-gray-500">
								No data available
							</td>
						</tr>
					) : (
						sortedData.map((row, idx) => (
							<tr key={String(rowKey ? rowKey(row, idx) : idx)} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
								{selectable && (
									<td className="p-2">
										{isMultiple ? (
											<input
												aria-label={`Select row ${idx + 1}`}
												type="checkbox"
												checked={selected.has(idx)}
												onChange={() => toggleRow(idx)}
											/>
										) : (
											<input
												aria-label={`Select row ${idx + 1}`}
												type="radio"
												name="row-select"
												checked={selected.has(idx)}
												onChange={() => toggleRow(idx)}
											/>
										)}
									</td>
								)}
								{columns.map(col => (
									<td key={col.key} className="p-2 text-sm text-gray-800 dark:text-gray-100 border-t border-gray-100 dark:border-gray-700">
										{String(row[col.dataIndex] as any)}
									</td>
								))}
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
}

export default DataTable;


