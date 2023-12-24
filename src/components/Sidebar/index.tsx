'use client'

import {
	BarChart,
	CheckSquare,
	Cog,
	Flag,
	Home,
	LifeBuoy,
	Menu,
	Search,
	SquareStack,
	Users
} from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'

import { Input } from '../Form/Input'
import { NavItem } from '../NavItem'
import { UsedSpaceWidget } from '../UsedSpaceWidget'
import { Profile } from '../Profile'
import { Button } from '../Form/Button'

import { Logo } from './Logo'

export function Sidebar() {
	return (
		<Collapsible.Root className="fixed inset-0 bottom-auto z-20 flex flex-col gap-6 border-b border-r border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
			<div className="flex items-center justify-between">
				<Logo />
				<Collapsible.Trigger asChild className="lg:hidden">
					<Button variant="ghost">
						<Menu className="size-6" />
					</Button>
				</Collapsible.Trigger>
			</div>

			<Collapsible.Content
				forceMount
				className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
			>
				<Input.Root>
					<Input.Prefix>
						<Search className="h-5 w-5 text-zinc-500" />
					</Input.Prefix>

					<Input.Control placeholder="Search" />
				</Input.Root>

				<nav className="space-y-0.5">
					<NavItem icon={Home} title="Home" />
					<NavItem icon={BarChart} title="Dashboard" />
					<NavItem icon={SquareStack} title="Projects" />
					<NavItem icon={CheckSquare} title="Tasks" />
					<NavItem icon={Flag} title="Reporting" />
					<NavItem icon={Users} title="Users" />
				</nav>

				<div className="mt-auto flex flex-col gap-6">
					<nav className="space-y-0.5">
						<NavItem icon={LifeBuoy} title="Support" />
						<NavItem icon={Cog} title="Settings" />
					</nav>

					<UsedSpaceWidget />

					<div className="h-px bg-zinc-200" />

					<Profile />
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	)
}
