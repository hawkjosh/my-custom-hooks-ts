'use client'

import React from 'react'
import useEventListener from '@/hooks/useEventListener'
import { CustomContainer, CustomTitle } from '@/components/ui/basic'

export default function Example() {
	const [lastKey, setLastKey] = React.useState<string>('')

	useEventListener('keydown', (event) => {
		setLastKey((event as KeyboardEvent).key)
	})

	return (
		<main>
			<CustomTitle label="useEventListener Example" />
			<CustomContainer>
				<div className="flex items-center gap-4">
					<div className="text-2xl">Last key pressed:</div>
					<div className="p-2 border-2 border-yellow-400 rounded-md w-max min-w-12 h-14 flex items-center justify-center text-4xl font-semibold">
						{lastKey}
					</div>
				</div>
			</CustomContainer>
		</main>
	)
}
