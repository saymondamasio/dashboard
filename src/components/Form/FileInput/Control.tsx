'use client'

import { type ChangeEvent, type ComponentProps } from 'react'

import { useFileInput } from './Root'

export type FileInputControlProps = ComponentProps<'input'>

export function FileInputControl({multiple, ...props}: FileInputControlProps) {
	const { id, onFilesSelected } = useFileInput()

	function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
		if (event.target.files?.length == null) return

		const files = Array.from(event.target.files)

		onFilesSelected(files, multiple)
	}

	return <input type="file" className="sr-only" onChange={handleFilesSelected} id={id} multiple={multiple} {...props} />
}
