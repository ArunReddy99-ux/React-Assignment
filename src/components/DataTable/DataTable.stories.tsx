import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { DataTable, Column } from './DataTable';

type Person = { id: number; name: string; age: number; email: string };

const columns: Column<Person>[] = [
	{ key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
	{ key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
	{ key: 'email', title: 'Email', dataIndex: 'email' }
];

const meta: Meta<typeof DataTable<Person>> = {
	title: 'Components/DataTable',
	component: DataTable<Person>,
	args: {
		data: [
			{ id: 1, name: 'Alice', age: 24, email: 'alice@example.com' },
			{ id: 2, name: 'Bob', age: 29, email: 'bob@example.com' },
			{ id: 3, name: 'Charlie', age: 31, email: 'charlie@example.com' }
		],
		columns
	}
};

export default meta;
type Story = StoryObj<typeof DataTable<Person>>;

export const Basic: Story = {};

export const Loading: Story = {
	args: { loading: true }
};

export const Empty: Story = {
	args: { data: [] }
};

export const Selectable: Story = {
	render: (args) => {
		const [rows, setRows] = useState<Person[]>([]);
		return (
			<div className="space-y-2">
				<DataTable<Person> {...args} selectable selectionMode="multiple" onRowSelect={setRows} />
				<div className="text-sm text-gray-600 dark:text-gray-200">Selected: {rows.map(r => r.name).join(', ') || 'None'}</div>
			</div>
		);
	}
};

export const SingleSelect: Story = {
	render: (args) => {
		const [rows, setRows] = useState<Person[]>([]);
		return (
			<div className="space-y-2">
				<DataTable<Person> {...args} selectable selectionMode="single" onRowSelect={setRows} />
				<div className="text-sm text-gray-600 dark:text-gray-200">Selected: {rows.map(r => r.name).join(', ') || 'None'}</div>
			</div>
		);
	}
};


