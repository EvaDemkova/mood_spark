/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Jost", ...defaultTheme.fontFamily.sans],
				logo: ["Righteous", ...defaultTheme.fontFamily.sans],
			},
			brightness: {
				40: ".40",
			},
		},
	},
	plugins: [],
};
