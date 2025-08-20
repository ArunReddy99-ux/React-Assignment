import React, { useId, useMemo, useState } from 'react';
import { clsx } from 'clsx';

// InputFieldProps define the public API of the InputField component
export interface InputFieldProps {
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	label?: string;
	placeholder?: string;
	helperText?: string;
	errorMessage?: string;
	disabled?: boolean;
	invalid?: boolean;
	variant?: 'filled' | 'outlined' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	type?: 'text' | 'password' | 'email' | 'number' | 'search';
	name?: string;
	id?: string;
	className?: string;
	showClear?: boolean; // optional clear button
	showPasswordToggle?: boolean; // optional password toggle
	loading?: boolean; // optional loading state
}

/**
 * InputField is a flexible, accessible input component with label, helper text, and validation states.
 * It supports variants (filled, outlined, ghost), sizes, disabled/invalid/loading states, and optional clear/password toggle.
 */
export const InputField: React.FC<InputFieldProps> = ({
	value,
	onChange,
	label,
	placeholder,
	helperText,
	errorMessage,
	disabled = false,
	invalid = false,
	variant = 'outlined',
	size = 'md',
	type = 'text',
	name,
	id,
	className,
	showClear = false,
	showPasswordToggle = false,
	loading = false,
}) => {
	const autoId = useId();
	const inputId = id ?? autoId;
	const [internalType, setInternalType] = useState(type);

	// Variant-specific classes for container and input
	const baseInputClasses = 'block w-full rounded-md focus:outline-none transition-colors disabled:cursor-not-allowed shadow-sm placeholder:text-gray-400';

	const sizeClasses = useMemo(() => {
		switch (size) {
			case 'sm':
				return 'text-sm py-1.5 px-2';
			case 'lg':
				return 'text-base py-3 px-4';
			default:
				return 'text-sm py-2.5 px-3';
		}
	}, [size]);

	const variantClasses = useMemo(() => {
		if (variant === 'filled') {
			return 'bg-gray-100 dark:bg-gray-800 border border-transparent focus:ring-2 focus:ring-blue-500 focus:border-blue-500';
		}
		if (variant === 'ghost') {
			return 'bg-transparent border border-transparent focus:ring-2 focus:ring-blue-500 focus:border-blue-500';
		}
		return 'bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500';
	}, [variant]);

	const invalidClasses = invalid ? 'border-red-500 focus:ring-red-500' : '';

	const inputClasses = clsx(baseInputClasses, sizeClasses, variantClasses, invalidClasses, loading && 'opacity-60 cursor-wait', className);

	// Helper and error messages
	const describedById = helperText || errorMessage ? `${inputId}-desc` : undefined;

	// Handle clear button click
	const handleClear = (e: React.MouseEvent) => {
		if (disabled) return;
		const target = { value: '' } as any;
		onChange?.({ ...e, target } as any);
	};

	const isPassword = type === 'password' || internalType === 'password';

	return (
		<div className="w-full">
			{label && (
				<label htmlFor={inputId} className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
					{label}
				</label>
			)}
			<div className="relative">
				<input
					id={inputId}
					name={name}
					type={internalType}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className={inputClasses}
					disabled={disabled || loading}
					aria-invalid={invalid || undefined}
					aria-describedby={describedById}
				/>

				{/* Loading spinner */}
				{loading && (
					<span className="absolute inset-y-0 right-2 my-auto h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-transparent dark:border-gray-600"></span>
				)}

				{/* Clear button */}
				{showClear && value && value.length > 0 && !loading && (
					<button
						type="button"
						onClick={handleClear}
						className="absolute inset-y-0 right-2 my-auto h-6 w-6 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
						aria-label="Clear input"
					>
						×
					</button>
				)}

				{/* Password visibility toggle */}
				{showPasswordToggle && isPassword && !loading && (
					<button
						type="button"
						onClick={() => setInternalType(prev => (prev === 'password' ? 'text' : 'password'))}
						className="absolute inset-y-0 right-8 my-auto h-6 px-2 rounded text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
						aria-label="Toggle password visibility"
					>
						{internalType === 'password' ? 'Show' : 'Hide'}
					</button>
				)}
			</div>
			{(helperText || errorMessage) && (
				<p id={describedById} className={clsx('mt-1 text-xs', errorMessage ? 'text-red-600' : 'text-gray-500')}>{errorMessage || helperText}</p>
			)}
		</div>
	);
};

export default InputField;


