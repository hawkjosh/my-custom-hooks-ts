'use client'

import React from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'
import {
	CustomButton,
	CustomContainer,
	CustomTitle
} from '@/components/ui/basic'
import { CustomInput } from '@/components/ui/advanced'

export default function Example() {
	const [data, setData, removeData] = useLocalStorage('myKey', '')
	const [storageValue, setStorageValue] = React.useState<string>('')

	const handleSaveClick = () => {
		setData(storageValue)
		setStorageValue('')
	}

	const handleRemoveClick = () => {
		removeData()
	}

	return (
		<main>
			<CustomTitle label="useLocalStorage Example" />
			<CustomContainer>
				<div className="flex flex-col gap-4 w-2/3">
					<div className="flex flex-wrap items-center justify-center gap-4">
						<div className="text-lg">Stored data:</div>
						<div className="text-2xl font-semibold text-yellow-400">{data}</div>
					</div>
					<CustomInput
						name="storageValue"
						value={storageValue}
						onChange={(e) => setStorageValue(e.target.value)}
						placeholder="Enter data to store..."
						className="text-xl text-center normal-case w-full"
					/>
					<div className="flex w-full justify-evenly">
						<CustomButton
							label={data ? 'Update' : 'Save'}
							onClick={handleSaveClick}
							className="text-xl hover:text-green-500 hover:border-green-500"
						/>
						<CustomButton
							label="Remove"
							onClick={handleRemoveClick}
							className="text-xl hover:text-red-500 hover:border-red-500"
						/>
					</div>
				</div>
			</CustomContainer>
		</main>
	)
}
