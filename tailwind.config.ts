import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-color':'#C8E0F4',
        'secondary-color':'#508AA8',
        'ternary-color':'#ff465e',
        'dark-ternary-color':'#ba1200',
        'gray-color':'#F6F6F6',
        'shallow-blue':'#eff5fb',
        'dark-blue':'#133864',
        'middle-blue':'#c8dff4',
        'middle-shallow-blue':'#9DD1F1',
        'blue':'#C8E0F4',
        'darker-blue':'#273B4A',
        'golden':'#FDC800',
        'lime':'#a2da6a',
        'dark-lime':'#3faea3'
      },
      fontFamily:{
        'inherit':'inherit',
      },
      gridTemplateColumns:{
        'auto-fill-100':'repeat(auto-fill,minmax(300px,1fr))',
      },
      maxWidth:{
        'half':'50%',
        'less-half':'48%',
        'three-quarter':'75%',
      },
      width:{
        'half':'50%',
        'less-half':'48%',
        'three-quarter':'75%',
      },
      screens: {
        'sm': '350px',  // You can modify existing breakpoints
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Add or modify as needed
      },     
    },
  },
  plugins: [],
}
export default config
