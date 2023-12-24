/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'

import { Button } from './Form/Button'

export function Profile() {
	return (
		<div className="flex items-center gap-3">
			<img className="h-10 w-10 rounded-full" src="https://github.com/saymondamasio.png" alt="" />

			<div className="flex flex-col overflow-hidden">
				<span className="text-sm font-semibold text-zinc-500 dark:text-zinc-100">
					Saymon Damásio
				</span>
				<abbr
					className="truncate text-sm text-zinc-500 no-underline dark:text-zinc-400"
					title="saymon.damasio95@gmail.com"
				>
					saymon.damasio95@gmail.com
				</abbr>
			</div>

			<Button type="button" variant="ghost" className="ml-auto">
				<LogOut className="h-5 w-5 text-zinc-500" />
			</Button>
		</div>
	)
}
