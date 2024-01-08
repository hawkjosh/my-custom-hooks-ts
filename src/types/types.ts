export type AppLayoutProps = {
	children: React.ReactNode
}

export type ElementProps = {
	className?: string
	disabled?: boolean
	open?: boolean
	onClick?: () => void
	label?: React.ReactNode
	children?: React.ReactNode
}

export type WindowSizeProps = {
	width: number | undefined
	height: number | undefined
}

export type CountdownProps = {
	timeRef: React.MutableRefObject<NodeJS.Timeout | null>
	time: number
	setTime: React.Dispatch<React.SetStateAction<number>>
	isRunning: boolean
	setIsRunning: React.Dispatch<React.SetStateAction<boolean>>
	direction: 'up' | 'down'
}
