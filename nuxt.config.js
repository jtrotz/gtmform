module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'gtmform',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Form for GTMs' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
   * Dev Server Parameters
   */
  server: {
    hot: true,
    historyApiFallback: true,
    host: "0.0.0.0",
    port: 8080,
    disableHostCheck: true,
    compress: false,
    inline: true,
    stats: "none"
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

