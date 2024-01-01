/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "reddish":"#f13a5c",
      "blueish":"#2637b2",
      "blackish":"#222222",
      "hold":"#cccccc",
      "holdlight":"#dddddd",
      "bg":"#f7f7f7",
      "dark":"#555555",
      "papy":"#ae00ff",
      "alice":"#f6f7ff",
      "yelloish":"#f1b73a",
      "grennish":"#54cf70"
      
    }
  ,fontFamily: {
    opensans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
    oxy: ['"Oxygen"', ...defaultTheme.fontFamily.sans],
  }
  },
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '769px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px', 
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  }
}
  ,
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}
