import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "White":"hsl(0, 0%, 100%)",
        "Off_white":"hsl(0, 0%, 94%)",
        "Light_rey":"hsl(0, 0%, 86%)",
        "Smokey_grey":"hsl(0, 1%, 44%)",
        "Off_black":"hsl(0, 0%, 8%)",
        "purple":"hsl(259, 100%, 65%)",
        "Light_red":"hsl(0, 100%, 67%)"
      },
      borderRadius:{
        "setting":"10rem"
      },
      width:{
        "setting":"500px"
      }
    },
  },
  plugins: [],
}
export default config
