'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { TabItem } from './TabItem'

export function SettingsTabs() {
	const [selectedTab, setSelectedTab] = useState('my-details')

	return (
		<Tabs.Root defaultValue="my-details" value={selectedTab} onValueChange={setSelectedTab}>
			<Tabs.List className="mt-6 w-full items-center gap-4 border-b border-zinc-200">
				<TabItem title="My details" value="my-details" isSelected={selectedTab === 'my-details'} />
				<TabItem title="Profile" value="profile" isSelected={selectedTab === 'profile'} />
				<TabItem title="Password" value="password" isSelected={selectedTab === 'password'} />
				<TabItem title="Team" value="team" isSelected={selectedTab === 'team'} />
			</Tabs.List>
		</Tabs.Root>
	)
}
