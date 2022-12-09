require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'The Bright Learning Center',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'logo-blue.png' },
      {rel: "stylesheet", href: "https://cdn.jsdelivr.net/@ajusa/lit@1.0.0/dist/lit.css"}
    ],
    script: [
      { src: 'https://use.fontawesome.com/165d74492f.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    'aos/dist/aos.css'
  ],
  vendor: ["aos"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/EasySlider.js',
    '~/plugins/vue-awesome-swiper',
    {src: "~/plugins/aos", ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth-next',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.token',
          // global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'data', // <--- Default "user"
          autoFetch: true
        },
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'data.token' },
          user: { url: 'me', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    },
    redirect:{
      // login : '/dashboard',
      logout: '/login',
      // callback: '/login',
      home: '/admin'
    }
  },


  // router: {
  //   middleware: ['auth']
  // },



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
