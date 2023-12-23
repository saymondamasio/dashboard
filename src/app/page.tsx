import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import { FileInput } from '~/components/Form/FileInput'
import { Input } from '~/components/Form/Input'
import { Select } from '~/components/Form/Select'
import { SelectedItem } from '~/components/Form/Select/SelectedItem'
import { Textarea } from '~/components/Form/Textarea'
import { SettingsTabs } from '~/components/SettingsTabs'

export default function Home() {
	return (
		<>
			<h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

			<SettingsTabs />

			<div className="mt-6 flex flex-col ">
				<div className="flex items-center justify-between border-b border-zinc-200 pb-5">
					<div className="space-y-1">
						<h2 className="text-lg font-medium text-zinc-900">Personal</h2>
						<span className="text-sm text-zinc-500">
							Update your profile photo and personal details here.
						</span>
					</div>
					<div className="flex items-center gap-2">
						<button
							type="button"
							className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
						>
							Cancel
						</button>
						<button
							form="settings"
							type="submit"
							className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
						>
							Save
						</button>
					</div>
				</div>

				<form id="settings" className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200">
					<div className="grid grid-cols-form gap-3">
						<label htmlFor="first-name" className="text-sm font-medium text-zinc-700">
							Name
						</label>
						<div className="grid grid-cols-2 gap-6">
							<Input.Root>
								<Input.Control id="first-name" defaultValue="Saymon" />
							</Input.Root>

							<Input.Root>
								<Input.Control defaultValue="Damásio" />
							</Input.Root>
						</div>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label htmlFor="email" className="text-sm font-medium text-zinc-700">
							Email address
						</label>
						<Input.Root>
							<Input.Prefix>
								<Mail className="h-5 w-5 text-zinc-500" />
							</Input.Prefix>
							<Input.Control id="email" type="email" defaultValue="saymon@gmail.com" />
						</Input.Root>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label htmlFor="email" className="text-sm font-medium text-zinc-700">
							Your photo
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								This will be displayed on your profile
							</span>
						</label>
						<FileInput.Root className="flex items-start gap-5">
							<FileInput.ImagePreview />
							<FileInput.Trigger />

							<FileInput.Control />
						</FileInput.Root>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label htmlFor="role" className="text-sm font-medium text-zinc-700">
							Role
						</label>
						<Input.Root>
							<Input.Control id="role" defaultValue="Developer" />
						</Input.Root>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label htmlFor="country" className="text-sm font-medium text-zinc-700">
							Country
						</label>

						<Select placeholder="Select a country...">
							<SelectedItem value="br" text="Brazil" />
							<SelectedItem value="us" text="United States" />
						</Select>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label htmlFor="timezone" className="text-sm font-medium text-zinc-700">
							Timezone
						</label>
						<Select placeholder="Select a timezone...">
							<SelectedItem value="pt" text="Pacific Time (GMT -10:00)" />
							<SelectedItem value="ny" text="New York (GMT -5:00)" />
						</Select>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label htmlFor="bio" className="text-sm font-medium text-zinc-700">
							Bio
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								Write a short introduction.
							</span>
						</label>
						<div className="space-y-3 ">
							<div className="grid grid-cols-2 gap-3">
								<Select defaultValue="normal">
									<SelectedItem value="normal" text="Normal Text" />
									<SelectedItem value="md" text="Markdown" />
								</Select>

								<div className="flex items-center gap-1">
									<button type="button" className="rounded-md p-2 hover:bg-zinc-50">
										<Bold className="size-4 text-zinc-500" strokeWidth={3} />
									</button>
									<button type="button" className="rounded-md p-2 hover:bg-zinc-50">
										<Italic className="size-4 text-zinc-500" strokeWidth={3} />
									</button>
									<button type="button" className="rounded-md p-2 hover:bg-zinc-50">
										<Link className="size-4 text-zinc-500" strokeWidth={3} />
									</button>
									<button type="button" className="rounded-md p-2 hover:bg-zinc-50">
										<List className="size-4 text-zinc-500" strokeWidth={3} />
									</button>
									<button type="button" className="rounded-md p-2 hover:bg-zinc-50">
										<ListOrdered className="size-4 text-zinc-500" strokeWidth={3} />
									</button>
								</div>
							</div>

							<Textarea id="bio" defaultValue="I'am a Product Design based in Melbourne..." />
						</div>
					</div>

					<div className="grid grid-cols-form gap-3 pt-5">
						<label htmlFor="portfolio" className="text-sm font-medium text-zinc-700">
							Portfolio projects
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								Share a few snippets of your work.
							</span>
						</label>
						<FileInput.Root>
							<FileInput.Trigger />

							<FileInput.List />

							<FileInput.Control multiple />
						</FileInput.Root>
					</div>

					<div className="flex items-center justify-end gap-2 pt-5">
						<button
							type="button"
							className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
						>
							Cancel
						</button>
						<button
							form="settings"
							type="submit"
							className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</>
	)
}
