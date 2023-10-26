export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-toolbox',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/styles/bootstrap-4.1.2/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/plugins/font-awesome-4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/plugins/OwlCarousel2-2.3.4/owl.carousel.css' },
      { rel: 'stylesheet', href: '/plugins/OwlCarousel2-2.3.4/owl.theme.default.css' },
      { rel: 'stylesheet', href: '/plugins/OwlCarousel2-2.3.4/animate.css' },
      { rel: 'stylesheet', href: '/plugins/jquery-datepicker/jquery-ui.css' },
      { rel: 'stylesheet', href: '/plugins/colorbox/colorbox.css' }
    ],
    script: [
      { defer: true, src: '/js/jquery-3.3.1.min.js' },
      { defer: true, src: '/styles/bootstrap-4.1.2/popper.js' },
      { defer: true, src: '/styles/bootstrap-4.1.2/bootstrap.min.js' },
      { defer: true, src: '/plugins/greensock/TweenMax.min.js' },
      { defer: true, src: '/plugins/greensock/TimelineMax.min.js' },
      { defer: true, src: '/plugins/scrollmagic/ScrollMagic.min.js' },
      { defer: true, src: '/plugins/greensock/animation.gsap.min.js' },
      { defer: true, src: '/plugins/greensock/ScrollToPlugin.min.js' },
      { defer: true, src: '/plugins/OwlCarousel2-2.3.4/owl.carousel.js' },
      { defer: true, src: '/plugins/easing/easing.js' },
      { defer: true, src: '/plugins/progressbar/progressbar.min.js' },
      { defer: true, src: '/plugins/parallax-js-master/parallax.min.js' },
      { defer: true, src: '/plugins/jquery-datepicker/jquery-ui.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
