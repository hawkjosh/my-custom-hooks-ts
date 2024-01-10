import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { IoCloseCircle } from 'react-icons/io5'
import { type ElementProps } from '@/types/types'
import React from 'react'

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

type FormProps = {
	onSubmit?: React.FormEventHandler<HTMLFormElement>
} & ElementProps

export function CustomForm({ className, children, onSubmit }: FormProps) {
	return (
		<form onSubmit={onSubmit} className={cn('', className)}>
			{children}
		</form>
	)
}

type InputProps = {
	name?: string
	label?: string
	placeholder?: string
	value?: string | number
	onChange?: React.ChangeEventHandler<HTMLInputElement>
} & ElementProps

export function CustomInput({
	className,
	name,
	label,
	value,
	placeholder,
	onChange
}: InputProps) {
	return (
		<label htmlFor={name} className="flex flex-col gap-2 text-lg">
			{label && `${label}:`}
			<input
				type="text"
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={cn(
					'flex py-1 uppercase bg-transparent border-white rounded-md cursor-pointer w-40 place-items-center place-content-center place-self-center hover:shadow-md hover:filter hover:brightness-110',
					className
				)}
			/>
		</label>
	)
}

export function CustomModal({
	className,
	children,
	open,
	onClick
}: ElementProps) {
	return (
		<>
			{open && (
				<>
					<div
						className="fixed top-0 left-0 z-0 w-full h-full bg-black opacity-60"
						onClick={onClick}
					/>
					<div
						className={cn(
							`bg-slate-500 rounded-xl w-3/4 max-w-screen-xl h-3/4 z-10 p-2 absolute place-content-center place-items-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
								open ? 'flex' : 'hidden'
							}`,
							className
						)}
					>
						{children}
						<div
							className="absolute top-0 right-0 m-2 flex place-content-center place-items-center"
							onClick={onClick}
						>
							<IoCloseCircle className="text-2xl hover:text-yellow-400 hover:scale-110 transition-all duration-300 cursor-pointer" />
						</div>
					</div>
				</>
			)}
		</>
	)
}

type SelectProps = {
	name?: string
	label?: string
	placeholder?: string
	value?: string | number
	options?: { label: number | string; value: number; action?: () => void }[]
	onChange?: React.ChangeEventHandler<HTMLSelectElement>
} & ElementProps

export function CustomSelect({
	className,
	children,
	name,
	label,
	value,
	placeholder,
	options,
	onChange
}: SelectProps) {
	return (
		<label htmlFor={name} className="flex flex-col gap-2 text-lg">
			{label && `${label}:`}
			<select
				name={name}
				value={value}
				onChange={onChange}
				className={cn(
					'flex py-1 pe-8 uppercase bg-transparent border-white rounded-md cursor-pointer w-fit place-items-center place-content-center place-self-center hover:shadow-md hover:filter hover:brightness-110',
					className
				)}
			>
				<option
					value=""
					disabled
					className="italic font-semibold text-gray-400"
				>
					{placeholder}
				</option>
				{options?.map((option, index) => (
					<option key={index} value={option.value} className="text-gray-900">
						{option.label || option.value}
					</option>
				))}
				{children}
			</select>
		</label>
	)
}
