'use client'

import useCountdown from '@/hooks/useCountdown'
import {
	CustomButton,
	CustomContainer,
	CustomIcon,
	CustomTitle
} from '@/components/ui/basic'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'
import { type CountdownProps } from '@/types/types'

export default function Example() {
	const { time, setTime, isRunning, startStop, reset } = useCountdown()

	const formatTime = (ms: number) => {
		let sDisplay = Math.floor((ms % 60000) / 1000)
		let msDisplay = ms % 1000

		return `${sDisplay.toString().padStart(2, '0')}:${msDisplay
			.toString()
			.padStart(3, '0')}`
	}

	const toggleTime = (direction: CountdownProps['direction']) => {
		const increment = 1000
		if (direction === 'up') {
			setTime((t) => t + increment)
		} else if (direction === 'down' && time > 0) {
			setTime((t) => t - increment)
		} else {
			setTime(0)
		}
	}

	return (
		<main>
			<CustomTitle label="useCountdown Example" />
			<CustomContainer>
				<div className="flex items-center gap-4">
					<CustomIcon
						className="text-4xl hover:text-red-600"
						disabled={time === 0}
						onClick={() => toggleTime('down')}
						label={<IoRemoveCircleOutline />}
					/>
					<div className="text-4xl text-blue-500">{formatTime(time)}</div>
					<CustomIcon
						className="text-4xl hover:text-green-600"
						onClick={() => toggleTime('up')}
						label={<IoAddCircleOutline />}
					/>
				</div>
				<div className="flex items-center gap-4">
					<CustomButton
						className={`text-lg ${
							isRunning
								? 'text-red-500 border-red-500 hover:text-red-600 hover:border-red-600'
								: 'hover:text-green-600 hover:border-green-600'
						}`}
						disabled={time === 0}
						onClick={startStop}
						label={isRunning ? 'Stop' : 'Start'}
					/>
					<CustomButton
						className="text-lg hover:text-yellow-600 hover:border-yellow-600"
						disabled={!isRunning && time === 0}
						onClick={reset}
						label="Reset"
					/>
				</div>
			</CustomContainer>
		</main>
	)
}
