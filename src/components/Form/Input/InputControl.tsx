import { type ComponentProps } from 'react'

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
	return (
		<input
			className="flex-1 border-none bg-transparent p-0 text-zinc-900 placeholder:text-zinc-600 focus:outline-none"
			{...props}
		/>
	)
}