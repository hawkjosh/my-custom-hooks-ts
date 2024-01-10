import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { type ElementProps } from '@/types/types'

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function CustomButton({ className, ...props }: ElementProps) {
	return (
		<button
			className={cn('CustomButton', { disabled: props.disabled }, className)}
			onClick={props.onClick}
		>
			{props.label || props.children}
		</button>
	)
}

export function CustomContainer({ className, ...props }: ElementProps) {
	return (
		<div className={cn('CustomContainer', className)}>{props.children}</div>
	)
}

export function CustomIcon({ className, ...props }: ElementProps) {
	return (
		<span
			className={cn('CustomIcon', { disabled: props.disabled }, className)}
			onClick={props.onClick}
		>
			{props.label || props.children}
		</span>
	)
}

export function CustomTitle({ className, ...props }: ElementProps) {
	return (
		<div className={cn('CustomTitle', className)}>
			{props.label || props.children}
		</div>
	)
}
