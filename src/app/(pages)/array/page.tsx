'use client'

import React from 'react'
import useArray from '@/hooks/useArray'
import {
	CustomButton,
	CustomContainer,
	CustomIcon,
	CustomTitle
} from '@/components/ui/basic'
import {
	CustomForm,
	CustomInput,
	CustomModal,
	CustomSelect
} from '@/components/ui/advanced'
import { RxReset } from 'react-icons/rx'

export default function Array() {
	const [modalOpen, setModalOpen] = React.useState<boolean>(false)
  const initialFormState: { option: string; idx1: string; idx2: string; val: string } = {
    option: '',
    idx1: '',
    idx2: '',
    val: ''
  }
	const [formData, setFormData] = React.useState<{ option: string; idx1: string; idx2: string; val: string }>(initialFormState)

  const resetForm = () => {
		setFormData(initialFormState)
	}

	const handleModalOpen = () => setModalOpen(true)

	const handleModalClose = () => {
		setModalOpen(false)
		resetForm()
	}

	const { array, methods } = useArray()

  type ArrayOptions = {
    label: string
    value: number
    action: () => void
  }[]

	const arrOptions: ArrayOptions = [
		{
			label: 'Add to beginning',
			value: 1,
			action: () => methods.unshift(parseInt(formData.val))
		},
		{
			label: 'Add to end',
			value: 2,
			action: () => methods.push(parseInt(formData.val))
		},
		{
			label: 'Add before position',
			value: 3,
			action: () =>
				methods.splice(parseInt(formData.idx1), 0, parseInt(formData.val))
		},
		{
			label: 'Remove first',
			value: 4,
			action: () => methods.shift()
		},
		{
			label: 'Remove last',
			value: 5,
			action: () => methods.pop()
		},
		{
			label: 'Remove at position',
			value: 6,
			action: () => methods.splice(parseInt(formData.idx1), 1)
		},
		{
			label: 'Fill all with same',
			value: 7,
			action: () => methods.fill(parseInt(formData.val))
		},
		{
			label: 'Change at position',
			value: 8,
			action: () =>
				methods.update(parseInt(formData.idx1), parseInt(formData.val))
		},
		{
			label: 'Swap two positions',
			value: 9,
			action: () =>
				methods.swap(parseInt(formData.idx1), parseInt(formData.idx2))
		}
	]

  type PositionsListOptions = {
    label: number
    value: number
  }[]

	const positionsList: PositionsListOptions = array.map((_, index) => ({
		label: index + 1,
		value: index
	}))

	const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((formData) => ({
			...formData,
			[name]: value
		}))
	}

	const handleFormSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData((formData) => ({
			...formData,
			[name]: value
		}))
	}

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const selectedAction = arrOptions.find(
			(option) => option.value === parseInt(formData.option)
		)

		if (selectedAction) {
			selectedAction.action()
		}

    resetForm()
	}

	return (
		<main>
			<CustomTitle label="useArray Example" />
			<CustomContainer>
				<CustomButton
					className="text-lg hover:text-yellow-400 hover:border-yellow-400"
					label="Fun With Arrays"
					onClick={handleModalOpen}
				/>
			</CustomContainer>
			<CustomModal
				open={modalOpen}
				onClick={handleModalClose}
			>
				<div className="flex flex-col items-center w-4/5 gap-3">
					<div className="relative flex items-center justify-center w-full p-3 text-4xl bg-red-500">
						<div className="flex-1 text-center">[ {array.join(', ')} ]</div>
						<CustomIcon
							label={<RxReset />}
							className="right-3 hover:text-yellow-400"
							onClick={methods.reset}
						/>
					</div>
					<CustomForm onSubmit={handleFormSubmit} className="flex gap-3">
						<CustomSelect
							label="Options"
							name="option"
							options={arrOptions}
							value={formData.option}
							onChange={handleFormSelectChange}
							placeholder="Select an option..."
						/>
						{[3, 6, 8, 9].includes(parseInt(formData.option)) && (
							<CustomSelect
								label="1st Position"
								name="idx1"
								options={positionsList}
								value={formData.idx1}
								onChange={handleFormSelectChange}
								placeholder="Select position..."
							/>
						)}
						{parseInt(formData.option) === 9 && (
							<CustomSelect
								label="2nd Position"
								name="idx2"
								options={positionsList.filter(
									(position) => position.value !== parseInt(formData.idx1)
								)}
								value={formData.idx2}
								onChange={handleFormSelectChange}
								placeholder="Select position..."
							/>
						)}
						{[1, 2, 3, 7, 8].includes(parseInt(formData.option)) && (
							<CustomInput
								label="Value"
								name="val"
								value={formData.val}
								onChange={handleFormInputChange}
								placeholder="Enter value..."
							/>
						)}
						<CustomButton
							label="Submit"
							type="submit"
							disabled={
								formData.option === '' ||
								(parseInt(formData.option) === 6 && formData.idx1 === '') ||
								([1, 2, 7].includes(parseInt(formData.option)) &&
									formData.val === '') ||
								([3, 8].includes(parseInt(formData.option)) &&
									(formData.idx1 === '' || formData.val === '')) ||
								(parseInt(formData.option) === 9 &&
									(formData.idx1 === '' || formData.idx2 === ''))
							}
							className="grid-col-5"
						/>
					</CustomForm>
				</div>
			</CustomModal>
		</main>
	)
}
