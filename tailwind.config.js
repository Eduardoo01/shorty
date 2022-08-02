module.exports = {
	content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: {
					950: "#18181b",
				},
				"cyan-bg": "#F1F8F6",
				"main-text": "#3DCBBB",
				"main-accent": "#D66C63",
			},
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif']
			},
		},
	},
	plugins: [],
};
