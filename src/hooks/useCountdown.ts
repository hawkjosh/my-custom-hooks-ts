'use client'

import React from 'react'
import { type CountdownProps } from '@/types/types'

export default function useCountdown() {
	const timeRef: CountdownProps['timeRef'] =
		React.useRef<NodeJS.Timeout | null>(null)
	const [time, setTime] = React.useState<CountdownProps['time']>(0)
	const [isRunning, setIsRunning] =
		React.useState<CountdownProps['isRunning']>(false)

	React.useEffect(() => {
		const countdown = () => setTime((t) => t - 1)

		if (time > 0 && isRunning) {
			timeRef.current = setInterval(countdown, 1000)
		} else if (time === 0) {
			setIsRunning(false)
			if (timeRef.current) clearInterval(timeRef.current)
		} else if (!isRunning) {
			if (timeRef.current) clearInterval(timeRef.current)
		}

		return () => {
			if (timeRef.current) clearInterval(timeRef.current)
		}
	}, [isRunning, time])

	const start = () => {
		if (time > 0) {
			setIsRunning(true)
		}
	}

	const stop = () => {
		setIsRunning(false)
		if (timeRef.current) clearInterval(timeRef.current)
	}

	const reset = () => {
		stop()
		setTime(0)
	}

	return { time, setTime, isRunning, start, stop, reset }
}
