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
			xl: [
				'40px',
				{
					fontWeight: 700,
					lineHeight: '48px',
					letterSpacing: '-1.4px',
				},
			],
			'2xl': [
				'48px',
				{
					fontWeight: 700,
					lineHeight: '48px',
					letterSpacing: '-1.2px',
				},
			],
			'3xl': [
				'56px',
				{
					fontWeight: 700,
					lineHeight: '56px',
					letterSpacing: '-1.4px',
				},
			],
			'4xl': [
				'80px',
				{
					fontWeight: 700,
					lineHeight: '80px',
					letterSpacing: '-2px',
				},
			],
			'5xl': [
				'120px',
				{
					fontWeight: 700,
					lineHeight: '200px',
					letterSpacing: '-3px',
				},
			],
			'6xl': [
				'200px',
				{
					fontWeight: 700,
					lineHeight: '200px',
					letterSpacing: '-5px',
				},
			],
		},
	},
	plugins: [],
};
