import React from 'react'
import { type WindowSizeProps } from '@/types/types'

export default function useWindowSize(): WindowSizeProps {
	const [windowSize, setWindowSize] = React.useState<WindowSizeProps>({
		width: undefined,
		height: undefined
	})

	React.useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			})
		}
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return windowSize
}
