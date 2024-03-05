import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#f7f7f7',
        lighter: '#fafafa',
        light: '#ffffff',
        dark: '#efefef',
      },
      black: {
        DEFAULT: '#232323',
        light: '#3c3c3c',
        lightest: '#666666',
        dark: '#0a0a0a',
        darkest: '#000000',
      },
      gray: {
        DEFAULT: '#cccccc',
        light: '#e5e5e5',
        lighter: '#d5d5d5',
        dark: '#666666',
      },
      blue: {
        DEFAULT: '#006ef9',
        light: '#3e93ff',
        lighter: '#1c80ff',
        lightest: '#85bfff',
        dark: '#0050b5',
        darkest: '#003271',
      },
      yellow: {
        DEFAULT: '#ffd31c',
        light: '#ffe060',
        lightest: '#ffeda4',
        dark: '#d7ad00',
        darkest: '#937700',
      },
      orange: {
        DEFAULT: '#ff8d00',
        light: '#ffab44',
        lightest: '#ffc988',
        dark: '#cc7000',
        darkest: '#884b00',
      },
      pink: {
        DEFAULT: '#ff1886',
        light: '#ff5caa',
        lightest: '#ffa0ce',
        dark: '#d30065',
        darkest: '#8f0044',
      },
    },
    fontFamily: {
      sans: 'Saira, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'play-element':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='258.192' height='309' viewBox='0 0 258.192 309'%3E%3Cg opacity='0.7'%3E%3Cpath d='M353.091,172.459,310.66,272.751,96.489,54.928l139.077.006Z' transform='translate(-94.899 -54.928)' fill='%231c80ff'/%3E%3Cpath d='M95.761,287.619V177.678l139.9-58.391,75.862,77.155Z' transform='translate(-95.761 21.381)' fill='%23ff8d00'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
