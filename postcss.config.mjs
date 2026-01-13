/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Zmieniamy 'tailwindcss' na nowy plugin:
    "@tailwindcss/postcss": {},
  },
};

export default config;
