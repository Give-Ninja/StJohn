const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				red: '#E5173F',
				navy: '#00092E',
				'grey-20': '#F5F4F4',
				'grey-60': '#5A5656',
				'grey-80': '#312C2C',
			},
			fontFamily:{
				sans: ['"Poppins"', ...defaultTheme.fontFamily.sans]
			},
			fontSize:{
				'1.5xl': '1.25rem',
				'2.5xl': '2rem'
			},
		},
	},
	plugins: [],
};
