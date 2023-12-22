'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps {
	title: string
	value: string
	isSelected?: boolean
}

export function TabItem({ title, value, isSelected = false }: TabItemProps) {
	return (
		<Tabs.Trigger
			className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
			value={value}
		>
			<span>{title}</span>

			{isSelected && (
				<motion.div
					layoutId="activeTab"
					className="absolute inset-x-0 -bottom-px h-0.5 bg-violet-700"
				/>
			)}
		</Tabs.Trigger>
	)
}
