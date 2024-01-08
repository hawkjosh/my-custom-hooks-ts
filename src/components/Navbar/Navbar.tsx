'use client'

import React from 'react'
import Link from 'next/link'
import NavMenu from './NavMenu'
import { useNavEffects } from '@/utils/utils'

export default function Navbar() {
	const navbarRef = React.useRef<HTMLDivElement>(null)
	const navBrandRef = React.useRef<HTMLAnchorElement>(null)
	const { shrink } = useNavEffects([navbarRef, navBrandRef])

	return (
		<nav ref={navbarRef} className={shrink ? 'shrink' : ''}>
			<Link
				ref={navBrandRef}
				className={shrink ? 'NavBrand shrink' : 'NavBrand'}
				href="/"
			>
				My Custom Hooks
			</Link>
			<NavMenu />
		</nav>
	)
}
