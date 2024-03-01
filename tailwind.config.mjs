import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
		  fontFamily: {
			sans: ['Instrument Sans Variable', ...defaultTheme.fontFamily.sans],
		  },
		  animation: {
			spotlight: "spotlight 2s ease .75s 1 forwards",
			"background-shine": "background-shine 2s linear infinite"
		  },
		  keyframes: {
			spotlight: {
			  "0%": {
				opacity: 0,
				transform: "translate(-72%, -62%) scale(0.5)",
			  },
			  "100%": {
				opacity: 1,
				transform: "translate(-50%,-40%) scale(1)",
			  },
			},
			"background-shine": {
				"from": {
				"backgroundPosition": "0 0"
				},
				"to": {
				"backgroundPosition": "-200% 0"
				}
			}
		  },
		},
	  },
	plugins: [require('@tailwindcss/typography')],
}
