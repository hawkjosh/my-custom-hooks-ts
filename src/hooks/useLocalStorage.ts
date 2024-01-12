'use client'

import React from 'react'

const writeToLocalStorage = (key: string, data: string) => {
	const stringifiedData = JSON.stringify(data)
	window.localStorage.setItem(key, stringifiedData)
}

const clearLocalStorageByKey = (key: string) => {
	window.localStorage.removeItem(key)
}

export default function useLocalStorage(key: string, defaultValue: string) {
	const [data, setData] = React.useState(() => {
		const item = window.localStorage.getItem(key)
		return item ? JSON.parse(item) : defaultValue
	})

	const set = React.useCallback(
		(storageData: string) => {
			writeToLocalStorage(key, storageData)
			setData(storageData)
		},
		[key]
	)

	const remove = React.useCallback(() => {
		clearLocalStorageByKey(key)
		setData(undefined)
	}, [key])

	React.useEffect(() => {
		const handler = () => {
			const item = window.localStorage.getItem(key)
			setData(item ? JSON.parse(item) : defaultValue)
		}

		window.addEventListener('storage', handler)

		return () => {
			window.removeEventListener('storage', handler)
		}
	}, [key, defaultValue])

	return [data, set, remove]
}
