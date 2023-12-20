import {
	BarChart,
	CheckSquare,
	Cog,
	Flag,
	LifeBuoy,
	Search,
	SquareStack,
	Users
} from 'lucide-react'

import { Input } from '../Input'
import { NavItem } from '../NavItem'
import Home from '~/app/page'
import { UsedSpaceWidget } from '../UsedSpaceWidget'
import { Profile } from '../Profile'

import { Logo } from './Logo'

export function Sidebar() {
	return (
		<aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
			<Logo />

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
		</aside>
	)
}
