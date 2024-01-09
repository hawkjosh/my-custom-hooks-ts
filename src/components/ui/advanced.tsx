import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { IoCloseCircle } from 'react-icons/io5'
import { type ElementProps } from '@/types/types'

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function Modal({ className, ...props }: ElementProps) {
	return (
		<>
			{props.open && (
				<>
					<div className='fixed top-0 left-0 z-0 w-full h-full bg-black opacity-60' />
					<div
						className={cn(
							`bg-slate-500 rounded-xl w-3/4 h-3/4 z-10 p-2 absolute place-content-center place-items-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
								props.open ? 'flex' : 'hidden'
							}`,
							className
						)}>
						{props.children}
						<div
							className='absolute top-0 right-0 m-2 flex place-content-center place-items-center'
							onClick={props.onClick}>
							<IoCloseCircle className='hover:text-yellow-400' />
						</div>
					</div>
				</>
			)}
		</>
	)
}
