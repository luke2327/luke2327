const { fontFamily } = require("tailwindcss/defaultTheme")


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}", "app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    screens: {
        xs: '360px',
        sm: '480px',
        md: '768px',
        ld: '800px',
        lg: '976px',
        slg: '1080px',
        xl: '1440px',
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          128: '32rem',
          144: '36rem',
        },
        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: "calc(var(--radius) - 4px)",
          '4xl': '2rem',
        },
        boxShadow: {
          'underline': 'inset 0 -3px 0 -1px #705778',
          'underline-hover': 'inset 0 -10px 0 -1px #705778',
          'underline-red': 'inset 0 -3px 0 -1px #ff4d4db5',
          'underline-orange': 'inset 0 -3px 0 -1px #e38939b5',
          'underline-yellow': 'inset 0 -3px 0 -1px #ffcc00b5',
          'underline-green': 'inset 0 -3px 0 -1px #00cc66b5',
          'underline-blue': 'inset 0 -3px 0 -1px #00bfffb5',
          'underline-indigo': 'inset 0 -3px 0 -1px #4d4dffb5',
          'underline-purple': 'inset 0 -3px 0 -1px #7e5befb5',
          'underline-eikoline': 'inset 0 -3px 0 -1px #ffffffb5',
          'underline-eikoline-hover': 'inset 0 -10px 0 -1px #ffffffb5',
          'underline-linger': 'inset 0 -3px 0 -1px #F19A37b5',
          'underline-linger-hover': 'inset 0 -10px 0 -1px #F19A37b5',
          'underline-playauto': 'inset 0 -3px 0 -1px #2D69C0b5',
          'underline-playauto-hover': 'inset 0 -10px 0 -1px #2D69C0b5',
          'underline-frifee': 'inset 0 -3px 0 -1px #809B8Cb5',
          'underline-frifee-hover': 'inset 0 -10px 0 -1px #809B8Cb5',
        },
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
        },
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
          nanum: ["var(--font-nanum)"]
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
};
