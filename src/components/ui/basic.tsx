import React from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { IoCloseCircle } from 'react-icons/io5'
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
			onClick={props.onClick}
		>
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
					'text-gray-500 pointer-events-none': props.disabled
				},
				className
			)}
			onClick={props.onClick}
		>
			{props.label || props.children}
		</span>
	)
}

export function Modal({ className, ...props }: ElementProps) {
	return (
		<>
			{props.open && (
				<>
					<div className="fixed top-0 left-0 z-0 w-full h-full bg-black opacity-60" />
					<div
						className={cn(
							`bg-slate-500 rounded-xl w-3/4 h-3/4 z-10 p-2 absolute place-content-center place-items-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
								props.open ? 'flex' : 'hidden'
							}`,
							className
						)}
					>
						{props.children}
						<Icon
							className="absolute top-0 right-0 m-2 hover:text-yellow-400"
							onClick={props.onClick}
							label={<IoCloseCircle />}
						/>
					</div>
				</>
			)}
		</>
	)
}

export function PageContent({ className, ...props }: ElementProps) {
	return (
		<div
			className={cn(
				'flex flex-col place-content-center place-items-center gap-4 border-2 w-3/4 mx-auto rounded-xl py-3',
				className
			)}
		>
			{props.children}
		</div>
	)
}

export function PageTitle({ className, ...props }: ElementProps) {
	return (
		<div className={cn('', className)}>
			{props.label || props.children}
		</div>
	)
}
