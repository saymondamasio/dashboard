import { LogOut } from 'lucide-react'

export function Profile() {
	return (
		<div className="flex items-center gap-3">
			<img className="h-10 w-10 rounded-full" src="https://github.com/saymondamasio.png" alt="" />

			<div className="flex flex-col overflow-hidden">
				<span className="text-sm font-semibold text-zinc-500">Saymon Damásio</span>
				<abbr
					className="truncate text-sm text-zinc-500 no-underline"
					title="saymon.damasio95@gmail.com"
				>
					saymon.damasio95@gmail.com
				</abbr>
			</div>

			<button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
				<LogOut className="h-5 w-5 text-zinc-500" />
			</button>
		</div>
	)
}