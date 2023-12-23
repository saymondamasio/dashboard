/* eslint-disable @typescript-eslint/consistent-type-assertions */
'use client'

import { createContext, type ComponentProps, useId, useContext, useState } from 'react'

export type FileInputRootProps = ComponentProps<'div'> & {
	fileInputId?: string
}

interface FileInputContextType {
	id: string
	files: File[]
	onFilesSelected: (files: File[], multiple?: boolean) => void
	removeFile: (file: File) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function FileInputRoot({ fileInputId, ...props }: FileInputRootProps) {
	const generatedId = useId()
	const [files, setFiles] = useState<File[]>([])

	const id = fileInputId ?? generatedId

	function onFilesSelected(files: File[], multiple?: boolean) {
		if (!(multiple ?? false)) {
			setFiles(files)
		} else {
			setFiles(state => [...state, ...files])
		}
	}

	function removeFile(file: File) {
		setFiles(state => state.filter(f => f.name !== file.name))
	}

	return (
		<FileInputContext.Provider value={{ id, files, onFilesSelected, removeFile }}>
			<div {...props} />
		</FileInputContext.Provider>
	)
}

export const useFileInput = () => useContext(FileInputContext)
