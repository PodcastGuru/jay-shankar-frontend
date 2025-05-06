/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#eef5fb',
            100: '#d6e8f5',
            200: '#add0eb',
            300: '#84b9e0',
            400: '#5b9cd6',
            500: '#4683ae', // Logo color
            600: '#3a6a8c',
            700: '#2d516b',
            800: '#1f3849',
            900: '#101c24',
          },
          secondary: {
            50: '#f0f7f4',
            100: '#d9ebe2',
            200: '#b3d7c5',
            300: '#8dc3a8',
            400: '#67af8b',
            500: '#4a8c6e',
            600: '#3b7058',
            700: '#2c5442',
            800: '#1e382c',
            900: '#0f1c16',
          },
          neutral: {
            50: '#f8f9fa',
            100: '#e9ecef',
            200: '#dee2e6',
            300: '#ced4da',
            400: '#adb5bd',
            500: '#6c757d',
            600: '#495057',
            700: '#343a40',
            800: '#212529',
            900: '#121416',
          }
        },
        fontFamily: {
            nunito: ['var(--font-nunito)', 'sans-serif'],
          },
      },
    },
    plugins: [],
  }