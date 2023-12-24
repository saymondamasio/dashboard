import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import { Button } from '~/components/Form/Button'
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
				<div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center">
					<div className="space-y-1">
						<h2 className="text-lg font-medium text-zinc-900">Personal</h2>
						<span className="text-sm text-zinc-500">
							Update your profile photo and personal details here.
						</span>
					</div>
					<div className="flex items-center gap-2">
						<Button type="button" variant="outline">
							Cancel
						</Button>
						<Button type="submit" form="settings">
							Save
						</Button>
					</div>
				</div>

				<form id="settings" className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200">
					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form ">
						<label htmlFor="first-name" className="text-sm font-medium text-zinc-700">
							Name
						</label>
						<div className="flex grid-cols-2 flex-col gap-6 lg:grid">
							<Input.Root>
								<Input.Control id="first-name" defaultValue="Saymon" />
							</Input.Root>

							<div className="flex flex-col gap-3  lg:block">
								<label htmlFor="last-name" className="text-sm font-medium text-zinc-700 lg:sr-only">
									Last name
								</label>

								<Input.Root>
									<Input.Control id="last-name" defaultValue="Damásio" />
								</Input.Root>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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

					<div className="gp:grid flex flex-col gap-3 pt-5 lg:grid-cols-form">
						<label htmlFor="email" className="text-sm font-medium text-zinc-700">
							Your photo
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								This will be displayed on your profile
							</span>
						</label>
						<FileInput.Root className="flex flex-col gap-5 lg:flow-root lg:items-start">
							<FileInput.ImagePreview />
							<FileInput.Trigger />

							<FileInput.Control />
						</FileInput.Root>
					</div>

					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
						<label htmlFor="role" className="text-sm font-medium text-zinc-700">
							Role
						</label>
						<Input.Root>
							<Input.Control id="role" defaultValue="Developer" />
						</Input.Root>
					</div>

					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
						<label htmlFor="country" className="text-sm font-medium text-zinc-700">
							Country
						</label>

						<Select placeholder="Select a country...">
							<SelectedItem value="br" text="Brazil" />
							<SelectedItem value="us" text="United States" />
						</Select>
					</div>

					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
						<label htmlFor="timezone" className="text-sm font-medium text-zinc-700">
							Timezone
						</label>
						<Select placeholder="Select a timezone...">
							<SelectedItem value="pt" text="Pacific Time (GMT -10:00)" />
							<SelectedItem value="ny" text="New York (GMT -5:00)" />
						</Select>
					</div>

					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
						<label htmlFor="bio" className="text-sm font-medium text-zinc-700">
							Bio
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								Write a short introduction.
							</span>
						</label>
						<div className="space-y-3 ">
							<div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
								<Select defaultValue="normal">
									<SelectedItem value="normal" text="Normal Text" />
									<SelectedItem value="md" text="Markdown" />
								</Select>

								<div className="flex items-center gap-1">
									<Button type="button" variant="ghost">
										<Bold className="size-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<Italic className="size-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<Link className="size-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<List className="size-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<ListOrdered className="size-4 text-zinc-500" strokeWidth={3} />
									</Button>
								</div>
							</div>

							<Textarea id="bio" defaultValue="I'am a Product Design based in Melbourne..." />
						</div>
					</div>

					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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
						<Button type="button" variant="outline">
							Cancel
						</Button>
						<Button type="submit" form="settings">
							Save
						</Button>
					</div>
				</form>
			</div>
		</>
	)
}
