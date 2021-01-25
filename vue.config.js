const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/scss/_variables.scss";',
      },
    },
  },
};
