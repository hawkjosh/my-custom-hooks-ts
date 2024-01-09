import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { type ElementProps } from '@/types/types'

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function Button({ className, ...props }: ElementProps) {
	return (
		<button
			className={cn(
				'px-3 py-1.5 border-2 rounded-md transition-all duration-300',
				{ 'text-gray-500 border-gray-500 pointer-events-none': props.disabled },
				className
			)}
			onClick={props.onClick}>
			{props.label || props.children}
		</button>
	)
}

export function Icon({ className, ...props }: ElementProps) {
	return (
		<span
			className={cn(
				'hover:scale-110 transition-all duration-300 cursor-pointer',
				{
					'text-gray-500 pointer-events-none': props.disabled,
				},
				className
			)}
			onClick={props.onClick}>
			{props.label || props.children}
		</span>
	)
}

export function PageContent({ className, ...props }: ElementProps) {
	return <div className={cn('PageContent', className)}>{props.children}</div>
}

export function PageTitle({ className, ...props }: ElementProps) {
	return (
		<div className={cn('PageTitle', className)}>{props.label || props.children}</div>
	)
}
