import { type ComponentProps } from 'react'

import { InputControl } from './InputControl'
import { InputPrefix } from './InputPrefix'

type InputRootProps = ComponentProps<'div'>

function InputRoot(props: InputRootProps) {
	return (
		<div
			className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
			{...props}
		/>
	)
}

export const Input = {
	Root: InputRoot,
	Control: InputControl,
	Prefix: InputPrefix
}
