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
				profile: 'max-content 1fr min-content',
				form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)'
			},
			borderWidth: {
				6: '6px'
			},

			colors: {
				violet: {
					25: '#fcfaff'
				}
			},

			keyframes: {
				slideDownAndFade: {
					from: {
						opacity: '0',
						transform: 'translateY(-4px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				slideUpAndFade: {
					from: {
						opacity: '1'
					},
					to: {
						opacity: '0'
					}
				}
			},

			animation: {
				slideDownAndFade: 'slideDownAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
				slideUpAndFade: 'slideUpAndFade 3s linear'
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
