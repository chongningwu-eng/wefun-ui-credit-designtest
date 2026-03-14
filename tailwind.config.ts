import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        base: {
          white: "hsl(var(--base-white))",
          black: "hsl(var(--base-black))",
        },
        gray: {
          50: "hsl(var(--gray-50))",
          100: "hsl(var(--gray-100))",
          200: "hsl(var(--gray-200))",
          300: "hsl(var(--gray-300))",
          400: "hsl(var(--gray-400))",
          500: "hsl(var(--gray-500))",
          600: "hsl(var(--gray-600))",
          700: "hsl(var(--gray-700))",
          800: "hsl(var(--gray-800))",
          825: "hsl(var(--gray-825))",
          850: "hsl(var(--gray-850))",
          900: "hsl(var(--gray-900))",
          925: "hsl(var(--gray-925))",
          950: "hsl(var(--gray-950))",
        },
        success: {
          50: "hsl(var(--success-50))",
          100: "hsl(var(--success-100))",
          500: "hsl(var(--success-500))",
          600: "hsl(var(--success-600))",
          700: "hsl(var(--success-700))",
          900: "hsl(var(--success-900))",
        },
        error: {
          50: "hsl(var(--error-50))",
          100: "hsl(var(--error-100))",
          500: "hsl(var(--error-500))",
          600: "hsl(var(--error-600))",
          700: "hsl(var(--error-700))",
          900: "hsl(var(--error-900))",
        },
        indigo: {
          400: "hsl(var(--indigo-400))",
          500: "hsl(var(--indigo-500))",
          "500-dark": "hsl(var(--indigo-500-dark))",
          600: "hsl(var(--indigo-600))",
          muted: "hsl(var(--indigo-muted))",
        },
        "cs-blue": {
          600: "hsl(var(--blue-600))",
          700: "hsl(var(--blue-700))",
        },
        "cs-green": {
          500: "hsl(var(--green-500))",
          600: "hsl(var(--green-600))",
          muted: "hsl(var(--green-muted))",
          "muted-dark": "hsl(var(--green-muted-dark))",
        },
        "cs-yellow": {
          400: "hsl(var(--yellow-400))",
          500: "hsl(var(--yellow-500))",
        },
        "purple-muted": "hsl(var(--purple-muted))",
        "orange-muted": "hsl(var(--orange-muted))",
      },
      borderRadius: {
        xxl: "24px",
        xl: "12px",
        lg: "10px",
        md: "8px",
        base: "6px",
        sm: "4px",
        btn: "var(--radius)",
        input: "6px",
        card: "8px",
        modal: "12px",
        tooltip: "4px",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Source Code Pro"', 'monospace'],
        heading: ['"Source Code Pro"', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
