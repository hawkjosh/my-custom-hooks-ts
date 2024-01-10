'use client'

import React from 'react'

export default function useArray() {
	const initialArray: number[] = [1, 2, 3, 4, 5]
	const [array, setArray] = React.useState<number[]>(initialArray)

	const methods = {
		push: (value: number) => setArray((arr) => [...arr, value]),
		pop: () => setArray(array.slice(0, array.length - 1)),
		shift: () => setArray(array.slice(1)),
		unshift: (value: number) => setArray((arr) => [value, ...arr]),
		splice: (index: number, count: number, ...values: number[]) =>
			setArray([
				...array.slice(0, index),
				...values,
				...array.slice(index + count)
			]),
		remove: (index: number) =>
			setArray([...array.slice(0, index), ...array.slice(index + 1)]),
		fill: (value: number) => setArray(array.map(() => value)),
		update: (index: number, value: number) =>
			setArray([...array.slice(0, index), value, ...array.slice(index + 1)]),
		swap: (index1: number, index2: number) =>
			setArray([
				...array.slice(0, index1),
				array[index2],
				...array.slice(index1 + 1, index2),
				array[index1],
				...array.slice(index2 + 1)
			]),
		reset: () => setArray(initialArray)
	}

  return { array, methods }
}
