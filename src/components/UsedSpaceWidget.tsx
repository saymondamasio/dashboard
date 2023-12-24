export function UsedSpaceWidget() {
	return (
		<div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5 dark:bg-zinc-800">
			<div className="space-y-1">
				<span className="text-sm/5 font-medium text-violet-700 dark:text-zinc-100">Used space</span>
				<p className="text-sm/5 text-violet-500 dark:text-zinc-400">Your team has used</p>
			</div>

			<progress
				className="h-2 w-full rounded-full progress-unfilled:rounded-full progress-unfilled:bg-violet-100 progress-filled:rounded-full progress-filled:bg-violet-600 dark:progress-unfilled:bg-zinc-600 dark:progress-filled:bg-violet-400"
				value="80"
				max="100"
			/>

			<div className="space-x-3">
				<button
					type="button"
					className="text-sm font-medium text-violet-500 hover:text-violet-600 dark:text-violet-300 dark:hover:text-violet-200"
				>
					Dismiss
				</button>
				<button className="text-sm font-medium text-violet-700 hover:text-violet-950 dark:text-zinc-300 dark:hover:text-zinc-100">
					Upgrade plan
				</button>
			</div>
		</div>
	)
}
