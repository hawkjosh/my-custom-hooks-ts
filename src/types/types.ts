export type LayoutProps = {
	children: React.ReactNode
}

export type ElementProps = {
	children?: React.ReactNode
	className?: string
	disabled?: boolean
	label?: React.ReactNode
	open?: boolean
	ref?: React.RefObject<HTMLElement>
	type?: string
	onClick?: () => void
}

export type WindowSizeProps = {
	height: number | undefined
	width: number | undefined
}

export type CountdownProps = {
	direction: 'up' | 'down'
	isRunning: boolean
	setIsRunning: React.Dispatch<React.SetStateAction<boolean>>
	setTime: React.Dispatch<React.SetStateAction<number>>
	timeRef: React.MutableRefObject<NodeJS.Timeout | null>
	time: number
}
