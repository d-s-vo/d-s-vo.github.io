/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/**/*.vue"
  ],
  theme: {
    extend: {
      colors: {
				link: '#617bf3',
				linkHover: '#294cf1',
			},
			zIndex: {
				'widget': '1000',
				'dropdown': '1010',
				'sticky': '1020',
				'fixed': '1030',
				'modalOverlay': '1039',
				'modal': '1040',
				'popover': '1050',
				'tooltip': '1060',
			}
    },
  },
  plugins: [],
}

