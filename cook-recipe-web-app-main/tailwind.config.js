/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('./img/HeroBackground.jpg')",
        // "side-bar-background": "url('./img/SideBarBackground.jpg')",
        "side-bar-background": "url('https://images.unsplash.com/photo-1459162141474-3bd9d0fb079d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8')",
      },
    },
  },
  plugins: [],
};
