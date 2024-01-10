'use client'

import useWindowSize from '@/hooks/useWindowSize'
import { CustomContainer, CustomTitle } from '@/components/ui/basic'

export default function Example() {
	const { width, height } = useWindowSize()

	return (
		<main>
			<CustomTitle label="useWindowSize Example" />
			<CustomContainer>
				<div className="flex items-center gap-4">
					<div className="text-4xl font-semibold">{width}px</div>
					<div className="text-xl italic">by</div>
					<div className="text-4xl font-semibold">{height}px</div>
				</div>
			</CustomContainer>
		</main>
	)
}
