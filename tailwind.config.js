/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				tomato: "#ff6347",

				navbar: {
					950: "#EF233C",
				},

				pimary: {
					950: "#2B2D42",
				},
			},
		},
	},
	plugins: [],
};
