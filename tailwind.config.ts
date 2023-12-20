import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				app: 'minmax(18rem, 20rem) 1fr',
				profile: 'max-content 1fr min-content'
			}
		}
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('progress-unfilled', ['&::-webkit-progress-bar', '&'])
			addVariant('progress-filled', ['&::-webkit-progress-value', '&::-moz-progress-bar', '&'])
		})
	]
}
export default config
