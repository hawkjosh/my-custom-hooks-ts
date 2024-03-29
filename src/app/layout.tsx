import type { Metadata } from 'next'
import { Roboto_Flex, Roboto_Slab, Roboto_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import { type LayoutProps } from '@/types/types'
import '@/styles/styles.css'

const robotoFlex = Roboto_Flex({
	subsets: ['latin'],
	variable: '--font-roboto-flex'
})
const robotoSlab = Roboto_Slab({
	subsets: ['latin'],
	variable: '--font-roboto-slab'
})
const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	variable: '--font-roboto-mono'
})

export const metadata: Metadata = {
	title: 'My Custom Hooks',
	description: 'Generated by Joshua Wilde Hawk using create next app'
}

export default function AppLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body
				className={`${robotoFlex.variable} ${robotoSlab.variable} ${robotoMono.variable}`}
			>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	)
}
