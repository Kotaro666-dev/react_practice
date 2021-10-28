module.exports = {
  style: {
    postcss: {
      // eslint-disable-next-line node/no-unpublished-require
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
