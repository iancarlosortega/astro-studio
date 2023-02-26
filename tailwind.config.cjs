/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			red: '#df5858',
			gray: '#7f8490',
			'dark-blue': '#1b1d23',
			'dark-gray': '#60636c',
			'light-gray': '#c9cdd9',
			'very-light-gray': '#f0f0f5',
		},
		fontSize: {
			base: [
				'15px',
				{
					fontWeight: 500,
				},
			],
		},
	},
	plugins: [],
};
