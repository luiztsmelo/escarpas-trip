module.exports = {
  mode: 'spa',
  /* serverMiddleware: ['~/api/index.js'], */
  /* ________________________________________ BUILD ________________________________________ */
  build: {
    postcss: {
      preset: {
        stage: 0
      }
    },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        if (!isClient) {
          config.externals.splice(0, 0, function (context, request, callback) {
            if (/^vue2-google-maps($|\/)/.test(request)) {
              callback(null, false)
            } else {
              callback()
            }
          })
        }
      }
    }
    /* analyze: true */
  },
  /* ________________________________________ CSS ________________________________________ */
  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/main.css'
  ],
  /* _______________________________________ HEAD ________________________________________ */
  head: {
    title: 'Escarpas Trip: Casas, Passeios, Atrações, Eventos e Restaurantes em Capitólio e Região',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Planeje sua viagem a Capitólio e região de forma simples, agradável e segura.' },
      { name: 'google-site-verification', content: 'IavBb3pz5krBr8BWBDH8LcwCr2IOEwOifb6h7n3d2jU' },
      // MOBILE THEMES
      // Chrome, Firefox OS and Opera
      { name: 'theme-color', content: '#fff' },
      // Windows Phone
      { name: 'msapplication-navbutton-color', content: '#fff' },
      // iOS Safari
      { name: 'apple-mobile-web-app-status-bar-style', content: '#fff' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '24x24', href: '/brand.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      { innerHTML: '{ "@context": "http://schema.org", "@type": "Organization", "url": "https://www.escarpastrip.com/", "logo": "https://firebasestorage.googleapis.com/v0/b/escarpas-trip.appspot.com/o/utils%2Fbrand-512.png?alt=media&token=a13bf7e0-e31d-4b77-9d43-e32e6095c42b" }', type: 'application/ld+json' }
    ]
  },
  /* ________________________________________ PLUGINS ________________________________________ */
  plugins: [
    '~/plugins/firebase',
    '~/plugins/vue-progressive-image',
    '~/plugins/vue-google-maps',
    '~/plugins/vue-croppa',
    '~/plugins/vue-autosize',
    '~/plugins/vue-awesome-swiper',
    '~/plugins/v-money',
    '~/plugins/scroll',
    '~/plugins/vue-js-modal',
    '~/plugins/vue-star-rating',
    '~/plugins/vue-airbnb-style-datepicker',
    '~/plugins/vue-multiselect'
  ],
  /* _________________________________________ LOADINGS __________________________________________ */
  loading: false,
  loadingIndicator: {
    name: 'pulse',
    color: '#dedede',
    background: 'white'
  },
  /* _______________________________________ APP MANIFEST _______________________________________ */
  manifest: {
    name: 'Escarpas Trip',
    ogTitle: 'Escarpas Trip',
    description: 'Planeje sua viagem para Capitólio de forma simples, agradável e segura.',
    ogDescription: 'Planeje sua viagem para Capitólio de forma simples, agradável e segura.',
    display: 'fullscreen',
    lang: 'pt-br',
    iconSrc: './static/brand.png'
  },
  /* _________________________________________ SITEMAP _________________________________________ */
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.escarpastrip.com',
    cacheTime: 1000 * 60 * 15,
    generate: false, // Enable me when using nuxt generate
    routes: [
      '/eventos/',
      '/eventos/:id',
      {
        url: '/page/2',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      }
    ]
  },
  /* ________________________________________ MODULES ________________________________________ */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios'
  ]
}
