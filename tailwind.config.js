/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				// nornaml mode
				bgColor: "hsl(0, 0%, 100%)",
				primaryColor: "hsl(206, 87%, 42%)",
				whiteColor: "hsl(0, 0%, 99%)",
				darkColor: "hsl(210deg 1% 16%)",
				lightDarkColor: "hsl(200, 2%, 30%)",

				// dark mode
				bgColor_dark: "hsl(210deg 1% 16%)",
				primaryColor_dark: "hsl(206, 87%, 42%)",
				whiteColor_dark: "hsl(0deg 0% 96%)",
				darkColor_dark: "hsl(0, 0%, 100%)",
				lightDarkColor_dark: "hsl(200deg 1% 62%)",
			},

			fontFamily: {
				localPoppins: "Poppins",
			},

			height: {
				navbarHeight: "4rem",
			},

			minHeight: {
				customHeightScreen: "calc(100vh - 4rem)",
			},
		},
	},
	plugins: [],
};
