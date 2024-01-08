import React from 'react'
import Link from 'next/link'
import { useMenuHandler } from '@/utils/utils'
import { IoMenu } from 'react-icons/io5'
import { menuLinks } from '@/lib/lib'
import { useNavEffects } from '@/utils/utils'

function MenuIcon({ onClick }: { onClick: () => void }) {
	const menuIconRef = React.useRef<HTMLDivElement>(null)
	const { shrink } = useNavEffects([menuIconRef])

	return (
		<div ref={menuIconRef}>
			<IoMenu
				className={shrink ? 'MenuIcon shrink' : 'MenuIcon'}
				onClick={onClick}
			/>
		</div>
	)
}

function MenuList({ onClick }: { onClick: () => void }) {
	const menuListRef = React.useRef<HTMLDivElement>(null)
	const menuListItemRef = React.useRef<HTMLAnchorElement>(null)
	const { shrink } = useNavEffects([menuListRef, menuListItemRef])
	return (
		<div ref={menuListRef} className={shrink ? 'MenuList shrink' : 'MenuList'}>
			{menuLinks.map((link, index) => (
				<Link
					key={index}
					ref={menuListItemRef}
					href={link.href}
					onClick={onClick}
					className={shrink ? 'MenuListItem shrink' : 'MenuListItem'}
				>
					{link.name}
				</Link>
			))}
		</div>
	)
}

export default function NavMenu() {
	const menuRef = React.useRef<HTMLDivElement>(null)

	const { menuOpen, toggleMenu } = useMenuHandler(menuRef)

	return (
		<div ref={menuRef} className="NavMenu">
			<MenuIcon onClick={() => toggleMenu()} />
			{menuOpen && <MenuList onClick={() => toggleMenu()} />}
		</div>
	)
}
