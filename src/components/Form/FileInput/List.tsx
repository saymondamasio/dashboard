'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import { useFileInput } from './Root'
import { FileItem } from './FileItem'

export function FileInputList() {
	const { files, removeFile } = useFileInput()
	const [parent] = useAutoAnimate()

	return (
		<div className="mt-4 space-y-3 " ref={parent}>
			{files.map(file => (
				<FileItem
					key={file.name}
					file={file}
					onRemove={() => {
						removeFile(file)
					}}
					state="success"
				/>
			))}
		</div>
	)
}
