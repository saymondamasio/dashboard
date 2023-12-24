import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { type VariantProps, tv } from 'tailwind-variants'

import { Button } from '../Button'
import { formatByes } from '~/utils/format-byes'

export const fileItem = tv({
	slots: {
		container: 'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
		icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500',
		deleteButton: ''
	},
	variants: {
		state: {
			error: {
				container: 'border-error-300 bg-error-25 dark:border-error-500/30 dark:bg-error-500/5',
				icon: 'border-error-50 bg-error-100 text-error-600 dark:border-error-500/5 dark:bg-error-500/5 dark:text-error-400',
				deleteButton:
					'text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300'
			},
			success: {
				container: 'border-violet-500 dark:border-violet-300/30'
			},
			progress: {
				container: 'dark:border-zinc-700'
			}
		}
	},
	defaultVariants: {
		state: 'success'
	}
})

export type FileItemProps = {
	file: File
	onRemove: (file: File) => void
} & VariantProps<typeof fileItem>

export function FileItem({ file, onRemove, state }: FileItemProps) {
	const { container, icon, deleteButton } = fileItem({ state })

	return (
		<div key={file.name} className={container()}>
			<div className={icon()}>
				<UploadCloud className="size-4" />
			</div>

			{state === 'error' ? (
				<div className="flex flex-1 flex-col items-start gap-1">
					<div className="flex flex-col">
						<span className="text-sm font-medium text-error-700 dark:text-error-400">
							Upload failed, please try again
						</span>
						<span className="text-sm  text-error-600 dark:text-error-500">{file.name}</span>
					</div>

					<button
						type="button"
						className="text-sm font-semibold text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300"
					>
						Try again
					</button>
				</div>
			) : (
				<div className="flex flex-1 flex-col items-start gap-1">
					<div className="flex flex-col">
						<span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
							{file.name}
						</span>
						<span className="text-sm  text-zinc-500 dark:text-zinc-400">
							{formatByes(file.size)}
						</span>
					</div>

					<div className="flex w-full items-center gap-3">
						<progress
							value={state === 'success' ? 100 : 50}
							max="100"
							className="h-2 w-full rounded-full progress-unfilled:rounded-full progress-unfilled:bg-violet-100  progress-filled:rounded-full progress-filled:bg-violet-600 dark:progress-unfilled:bg-zinc-600 dark:progress-filled:bg-violet-400"
						/>
						<span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
							{state === 'success' ? '100%' : '50%'}
						</span>
					</div>
				</div>
			)}

			{state === 'success' ? (
				<CheckCircle2 className="size-5 fill-violet-600 text-white" />
			) : (
				<Button
					type="button"
					variant="ghost"
					className={deleteButton()}
					onClick={() => {
						onRemove(file)
					}}
				>
					<Trash2 className="size-5" />
				</Button>
			)}
		</div>
	)
}
