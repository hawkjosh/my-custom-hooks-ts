import React from 'react'
import Link from 'next/link'
import { useMenuHandler } from '@/utils/utils'
import { IoMenu } from 'react-icons/io5'
import { menuLinks } from '@/lib/lib'
import { useNavEffects } from '@/utils/utils'

function NavMenuIcon({ onClick }: { onClick: () => void }) {
	const menuIconRef = React.useRef<HTMLDivElement>(null)
	const { shrink } = useNavEffects(menuIconRef)

	return (
		<IoMenu
			ref={menuIconRef}
			className={shrink ? 'NavMenuIcon navShrink' : 'NavMenuIcon'}
			onClick={onClick}
		/>
	)
}

function NavMenuList({ onClick }: { onClick: () => void }) {
	return (
		<div className="NavMenuList">
			{menuLinks.map((link, index) => (
				<Link
					key={index}
					href={link.href}
					onClick={onClick}
					className="NavMenuListItem"
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
			<NavMenuIcon onClick={() => toggleMenu()} />
			{menuOpen && (
				<NavMenuList onClick={() => toggleMenu()} />
			)}
		</div>
	)
}
