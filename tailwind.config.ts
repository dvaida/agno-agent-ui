import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#18181B',
          dark: '#FAFAFA',
        },
        primaryAccent: {
          DEFAULT: '#FAFAFA',
          dark: '#18181B',
        },
        brand: '#FF4017',
        background: {
          DEFAULT: '#fff',
          dark: '#111113',
          secondary: '#f5f5f5',
          'secondary-dark': '#27272A',
        },
        secondary: {
          DEFAULT: '#18181B',
          dark: '#f5f5f5',
        },
        border: 'rgba(var(--color-border-default))',
        accent: {
          DEFAULT: '#f5f5f5',
          dark: '#27272A',
        },
        muted: {
          DEFAULT: '#A1A1AA',
          dark: '#A1A1AA',
        },
        destructive: '#E53935',
        positive: '#22C55E'
      },
      fontFamily: {
        geist: 'var(--font-geist-sans)',
        dmmono: 'var(--font-dm-mono)'
      },
      borderRadius: {
        xl: '10px'
      }
    }
  },
  plugins: [tailwindcssAnimate]
} satisfies Config
