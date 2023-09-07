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
				heading: ["Heebo", ...defaultTheme.fontFamily.sans],
			},
			brightness: {
				40: ".40",
			},
			transitionDelay: {
				2000: "2000ms",
			},
			transitionProperty: {
				'height': 'height',
				"width": "width",
				"display": "display",
				"visibility": "visibility",
			}, 
			minWidth: {
				"3/4": "75%",
			}, 
			
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
