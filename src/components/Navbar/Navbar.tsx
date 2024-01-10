'use client'

import React from 'react'
import Link from 'next/link'
import { useMenuEffects, useNavEffects } from '@/utils/utils'
import { IoMenu } from 'react-icons/io5'
import { menuLinks } from '@/lib/lib'

export default function Navbar() {
	const navbarRef = React.useRef<HTMLDivElement>(null)
	const menuRef = React.useRef<HTMLDivElement>(null)
	const { menuOpen, toggleMenu } = useMenuEffects(menuRef)
	const { shrink } = useNavEffects(navbarRef)

	const classWithShrink = (base: string) => (shrink ? `${base} shrink` : base)

	return (
		<nav
			ref={navbarRef}
			className={classWithShrink('')}>
			<Link
				className={classWithShrink('NavBrand')}
				href='/'>
				My Custom Hooks
			</Link>
			<div
				ref={menuRef}
				className='NavMenu'>
				<IoMenu
					className={classWithShrink('MenuIcon')}
					onClick={() => toggleMenu()}
				/>
				{menuOpen && (
					<div className={classWithShrink('MenuList')}>
						{menuLinks.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								onClick={() => toggleMenu()}
								className={classWithShrink('MenuListItem')}>
								{link.name}
							</Link>
						))}
					</div>
				)}
			</div>
		</nav>
	)
}
