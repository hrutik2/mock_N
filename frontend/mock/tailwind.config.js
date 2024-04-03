module.exports = {
    mode: 'jit', // Just-In-Time mode for faster builds (optional)
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Paths to purge unused styles (optional)
    darkMode: false, // Whether to enable dark mode (optional)
    theme: {
      extend: {}, 
    },
    variants: {
      extend: {}, 
    },
    plugins: [], 
  };