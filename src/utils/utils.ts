import React from 'react'

export function useMenuHandler(ref: React.RefObject<HTMLElement>) {
	const [menuOpen, setMenuOpen] = React.useState(false)

	// Logic to open/close menu on click
	const toggleMenu = React.useCallback(() => {
		setMenuOpen((open) => !open)
	}, [setMenuOpen])

	// // Logic to open/close menu on hover
	// React.useEffect(() => {
	// 	const menuElement = ref.current

	// 	function handleMenuHover(event: MouseEvent) {
	// 		if (event.type === 'mouseenter') {
	// 			setMenuOpen(true)
	// 		} else if (event.type === 'mouseleave') {
	// 			setTimeout(() => {
	// 				if (!menuElement?.contains(document.elementFromPoint(event.clientX, event.clientY))) {
	// 					setMenuOpen(false)
	// 				}
	// 			}, 100)
	// 		}
	// 	}

	// 	menuElement?.addEventListener('mouseenter', handleMenuHover)
	// 	menuElement?.addEventListener('mouseleave', handleMenuHover)

	// 	return () => {
	// 		menuElement?.removeEventListener('mouseenter', handleMenuHover)
	// 		menuElement?.removeEventListener('mouseleave', handleMenuHover)
	// 	}
	// }, [ref])

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
		const navElement = ref.current
		if (navElement) {
			window.addEventListener('scroll', () => {
				if (window.scrollY > 0) {
					setShrink(true)
				} else {
					setShrink(false)
				}
			})
		}
	}, [ref])

	return { shrink }
}
