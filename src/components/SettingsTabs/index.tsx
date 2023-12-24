'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { useState } from 'react'

import { TabItem } from './TabItem'

export function SettingsTabs() {
	const [selectedTab, setSelectedTab] = useState('my-details')

	return (
		<Tabs.Root defaultValue="my-details" value={selectedTab} onValueChange={setSelectedTab}>
			<ScrollArea.Root className="w-full" type="scroll">
				<ScrollArea.Viewport className="w-full overflow-x-scroll">
					<Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
						<TabItem
							title="My details"
							value="my-details"
							isSelected={selectedTab === 'my-details'}
						/>
						<TabItem title="Profile" value="profile" isSelected={selectedTab === 'profile'} />
						<TabItem title="Password" value="password" isSelected={selectedTab === 'password'} />
						<TabItem title="Team" value="team" isSelected={selectedTab === 'team'} />
						<TabItem title="Plan" value="plan" isSelected={selectedTab === 'plan'} />
						<TabItem title="Billing" value="billing" isSelected={selectedTab === 'billing'} />
						<TabItem title="Email" value="email" isSelected={selectedTab === 'email'} />
						<TabItem
							title="Notification"
							value="notification"
							isSelected={selectedTab === 'notification'}
						/>
					</Tabs.List>
				</ScrollArea.Viewport>

				<ScrollArea.Scrollbar
					orientation="horizontal"
					className="flex  h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
				>
					<ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
				</ScrollArea.Scrollbar>
			</ScrollArea.Root>
		</Tabs.Root>
	)
}
