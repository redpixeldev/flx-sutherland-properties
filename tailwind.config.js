module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    fontFamily: {
			body: ['Work Sans', 'sans-serif'],
		},
		screens: {
			xs: "530px",
			sm: "640px",
			md: "768px",
			desk: "890px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},

		extend: {
			colors: {
				"sutherlandYellow": "#eabc54",
				"sutherlandYellowLight": "#f9efd9",
				"sutherlandBlack": "#0f191c",
				"sutherlandGray": "#242424",
			},

			boxShadow: {
				DEFAULT: '0 20px 20px rgba(0, 0, 0, 0.08)',
			},
		}
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
