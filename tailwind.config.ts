import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        muted: '#475569',
        accent: '#2563eb',
        paper: '#ffffff',
        card: '#f8fafc',
        line: '#94a3b8'
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
};

export default config;
