'use client'

import React from 'react'

export function useMenuEffects(ref: React.RefObject<HTMLElement>) {
	const [menuOpen, setMenuOpen] = React.useState(false)

	// Logic to open/close menu on click
	const toggleMenu = () => setMenuOpen((open) => !open)

	// // Logic to open/close menu on hover
	// const handleMenuHover = React.useCallback(
	// 	(event: MouseEvent) => {
	// 		if (event.type === 'mouseenter') {
	// 			setMenuOpen(true)
	// 		} else if (event.type === 'mouseleave') {
	// 			const timeoutId = setTimeout(() => {
	// 				const menuElement = ref.current
	// 				if (
	// 					!menuElement?.contains(
	// 						document.elementFromPoint(event.clientX, event.clientY)
	// 					)
	// 				) {
	// 					setMenuOpen(false)
	// 				}
	// 			}, 100)
	// 			return () => clearTimeout(timeoutId)
	// 		}
	// 	},
	// 	[ref]
	// )

	// React.useEffect(() => {
	// 	const menuElement = ref.current

	// 	menuElement?.addEventListener('mouseenter', handleMenuHover)
	// 	menuElement?.addEventListener('mouseleave', handleMenuHover)

	// 	return () => {
	// 		menuElement?.removeEventListener('mouseenter', handleMenuHover)
	// 		menuElement?.removeEventListener('mouseleave', handleMenuHover)
	// 	}
	// }, [ref, handleMenuHover])

	// Logic to open/close menu on click outside
	React.useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (!ref.current?.contains(event.target as Node)) {
				setMenuOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref])

	return { menuOpen, toggleMenu }
}

export function useNavEffects(ref: React.RefObject<HTMLElement>) {
	const [shrink, setShrink] = React.useState(false)

	React.useEffect(() => {
		const handleScroll = () => setShrink(window.scrollY > 0)
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return { shrink }
}
