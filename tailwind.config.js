/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-pattern": "url('src/assets/graph_bg.jpg')",
				"blog-pattern": "url('src/assets/blog_bg.jpg')",
			},
		},
	},
	plugins: [],
};
