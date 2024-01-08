'use client'

import useCountdown from '@/hooks/useCountdown'
import { Button, Icon, PageContent, PageTitle } from '@/components/ui/basic'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'
import { type CountdownProps } from '@/types/types'

export default function Countdown() {
	const { time, setTime, isRunning, start, stop, reset } = useCountdown()

	const toggleTime = (direction: CountdownProps['direction']) => {
		if (direction === 'up') {
			setTime((t) => t + 1)
		} else if (direction === 'down' && time > 0) {
			setTime((t) => t - 1)
		} else {
			setTime(0)
		}
	}

	return (
		<main>
			<PageTitle className="PageTitle" label="useCountdown Example" />
			<PageContent className="PageContent">
				<div className="flex items-center gap-4">
					<Icon
						className="text-4xl hover:text-red-600"
						disabled={time === 0}
						onClick={() => toggleTime('down')}
						label={<IoRemoveCircleOutline />}
					/>
					<div className="text-2xl text-blue-500">{time} seconds</div>
					<Icon
						className="text-4xl hover:text-green-600"
						onClick={() => toggleTime('up')}
						label={<IoAddCircleOutline />}
					/>
				</div>
				<div className="flex items-center gap-4">
					<Button
						className="text-lg hover:text-green-600 hover:border-green-600"
						disabled={isRunning || time === 0}
						onClick={start}
						label="Start"
					/>
					<Button
						className="text-lg hover:text-red-600 hover:border-red-600"
						disabled={!isRunning}
						onClick={stop}
						label="Stop"
					/>
					<Button
						className="text-lg hover:text-yellow-600 hover:border-yellow-600"
						disabled={!isRunning && time === 0}
						onClick={reset}
						label="Reset"
					/>
				</div>
			</PageContent>
		</main>
	)
}
