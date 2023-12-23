'use client'

import { Trash2, UploadCloud } from 'lucide-react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { formatByes } from '~/utils/format-byes'

import { useFileInput } from './Root'

export function FileInputList() {
	const { files, removeFile } = useFileInput()
	const [parent] = useAutoAnimate()

	return (
		<div className="mt-4 space-y-3 " ref={parent}>
			{files.map(file => (
				<div
					key={file.name}
					className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4 "
				>
					<div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
						<UploadCloud className="size-4" />
					</div>

					<div className="flex flex-1 flex-col items-start gap-1">
						<div className="flex flex-col">
							<span className="text-sm font-medium text-zinc-700">{file.name}</span>
							<span className="text-sm  text-zinc-500">{formatByes(file.size)}</span>
						</div>

						<div className="flex w-full items-center gap-3">
							<progress
								value="50"
								max="100"
								className="h-2 w-full rounded-full progress-unfilled:rounded-full progress-unfilled:bg-violet-100 progress-filled:rounded-full progress-filled:bg-violet-600"
							/>
							<span className="text-sm font-medium text-zinc-700">50%</span>
						</div>
					</div>

					<button
						type="button"
						className="ml-auto rounded-md p-2 hover:bg-zinc-50"
						onClick={() => {
							removeFile(file)
						}}
					>
						<Trash2 className="size-5 text-zinc-500" />
					</button>
				</div>
			))}
		</div>
	)
}
