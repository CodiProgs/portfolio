import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'podkova': [ "'Podkova', serif" ],
        'chakra-petch': "'Chakra Petch', sans-serif;",
      },
      colors: {
        'secondary': 'var(--secondary)',
      },
      boxShadow: {
        'btn': '0px 0px 0px 3px #c8cfe6'
      },
      backgroundColor: {
        'soft': 'var(--softBg)',
      }
    },
  },
  plugins: [],
}
export default config
