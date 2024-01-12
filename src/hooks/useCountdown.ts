'use client'

import React from 'react'
import { type CountdownProps } from '@/types/types'

export default function useCountdown() {
	const timeRef: CountdownProps['timeRef'] =
		React.useRef<NodeJS.Timeout | null>(null)
	const [time, setTime] = React.useState<CountdownProps['time']>(0)
	const [endTime, setEndTime] = React.useState<CountdownProps['endTime']>(null)
	const [isRunning, setIsRunning] =
		React.useState<CountdownProps['isRunning']>(false)

	React.useEffect(() => {
		const countdown = () => {
			const now = new Date().getTime()
			const remaining = endTime ? endTime - now : 0
			setTime(remaining > 0 ? remaining : 0)
		}

		if (time > 0 && isRunning) {
			timeRef.current = setInterval(countdown, 1)
		} else if (time === 0) {
			setIsRunning(false)
			if (timeRef.current) clearInterval(timeRef.current)
		} else if (!isRunning) {
			if (timeRef.current) clearInterval(timeRef.current)
		}

		return () => {
			if (timeRef.current) clearInterval(timeRef.current)
		}
	}, [isRunning, time, endTime])

	const start = () => {
		if (time > 0) {
			setEndTime(new Date().getTime() + time)
			setIsRunning(true)
		}
	}

	const stop = () => {
		setIsRunning(false)
		if (timeRef.current) clearInterval(timeRef.current)
	}

	const startStop = () => {
		if (isRunning) {
			stop()
		} else {
			start()
		}
	}

	const reset = () => {
		stop()
		setTime(0)
	}

	return { time, setTime, isRunning, startStop, reset }
}
