/// <reference types="vitest" />
// Extend expect() with jest-dom matchers for better a11y assertions
import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DataTable, Column } from './DataTable';

// Smoke tests for sorting and row selection behaviors

type Row = { id: number; name: string; age: number };

const columns: Column<Row>[] = [
	{ key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
	{ key: 'age', title: 'Age', dataIndex: 'age', sortable: true }
];

const data: Row[] = [
	{ id: 1, name: 'Bob', age: 30 },
	{ id: 2, name: 'Alice', age: 20 }
];

describe('DataTable', () => {
	it('renders rows and sorts by column', async () => {
		const user = userEvent.setup();
		render(<DataTable<Row> data={data} columns={columns} />);
		expect(screen.getByText('Bob')).toBeInTheDocument();
		await user.click(screen.getByRole('button', { name: /sort by name/i }));
		const firstCell = screen.getAllByRole('cell')[0];
		expect(firstCell).toHaveTextContent('Alice');
	});

	it('supports multi selection', async () => {
		const user = userEvent.setup();
		let selected: Row[] = [];
		render(<DataTable<Row> data={data} columns={columns} selectable selectionMode="multiple" onRowSelect={(r) => (selected = r)} />);
		const firstCheckbox = screen.getByLabelText('Select row 1');
		await user.click(firstCheckbox);
		expect(selected.length).toBe(1);
	});

	it('supports single selection', async () => {
		const user = userEvent.setup();
		let selected: Row[] = [];
		render(<DataTable<Row> data={data} columns={columns} selectable selectionMode="single" onRowSelect={(r) => (selected = r)} />);
		const firstRadio = screen.getByLabelText('Select row 1');
		await user.click(firstRadio);
		expect(selected.length).toBe(1);
	});
});


