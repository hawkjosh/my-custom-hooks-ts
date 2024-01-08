'use client'

import React from 'react'
import Link from 'next/link'
import NavMenu from './NavMenu'
import { useNavEffects } from '@/utils/utils'

export default function Navbar() {
	const navbarRef = React.useRef<HTMLDivElement>(null)
	const { shrink } = useNavEffects(navbarRef)

	return (
		<nav ref={navbarRef} className={shrink ? 'navShrink' : ''}>
			<Link className="NavBrand" href="/">
				My Custom Hooks
			</Link>
			<NavMenu />
		</nav>
	)
}
