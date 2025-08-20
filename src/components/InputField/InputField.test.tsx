/// <reference types="vitest" />
// Extend expect() with jest-dom matchers
import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { InputField } from './InputField';

// Tests cover controlled input behavior and error rendering

describe('InputField', () => {
	it('renders label and accepts input', async () => {
		const user = userEvent.setup();
		const Wrapper = () => {
			const [value, setValue] = useState('');
			return <InputField label="Email" placeholder="enter" value={value} onChange={(e) => setValue(e.target.value)} />;
		};
		render(<Wrapper />);
		const input = screen.getByLabelText('Email') as HTMLInputElement;
		expect(input).toBeInTheDocument();
		await user.type(input, 'abc');
		expect(input.value).toBe('abc');
	});

	it('shows error message when invalid', () => {
		render(<InputField label="Email" value="" onChange={() => {}} invalid errorMessage="Required" />);
		expect(screen.getByText('Required')).toBeInTheDocument();
	});
});


