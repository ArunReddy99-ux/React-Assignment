import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { InputField, InputFieldProps } from './InputField';

const meta: Meta<typeof InputField> = {
	title: 'Components/InputField',
	component: InputField,
	args: {
		label: 'Email',
		placeholder: 'you@example.com',
		variant: 'outlined',
		size: 'md'
	}
};

export default meta;
type Story = StoryObj<typeof InputField>;

const Controlled = (props: InputFieldProps) => {
	const [val, setVal] = useState('');
	return <InputField {...props} value={val} onChange={(e) => setVal(e.target.value)} />;
};

export const Outlined: Story = {
	render: (args) => <Controlled {...args} />
};

export const Filled: Story = {
	args: { variant: 'filled' },
	render: (args) => <Controlled {...args} />
};

export const Ghost: Story = {
	args: { variant: 'ghost' },
	render: (args) => <Controlled {...args} />
};

export const Sizes: Story = {
	args: { label: 'Name', placeholder: 'Your name' },
	render: (args) => (
		<div className="space-y-3">
			<Controlled {...args} size="sm" />
			<Controlled {...args} size="md" />
			<Controlled {...args} size="lg" />
		</div>
	)
};

export const WithHelperAndError: Story = {
	args: { helperText: 'We will never share your email.' },
	render: (args) => (
		<div className="space-y-3">
			<Controlled {...args} />
			<Controlled {...args} invalid errorMessage="Email is required" />
		</div>
	)
};

export const WithClearAndPasswordToggle: Story = {
	args: { showClear: true, showPasswordToggle: true, type: 'password', label: 'Password' },
	render: (args) => <Controlled {...args} />
};

export const Loading: Story = {
	args: { label: 'Loading', loading: true, placeholder: 'Fetching...' },
	render: (args) => <Controlled {...args} />
};


