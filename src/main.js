import {createApp} from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'keen-slider/keen-slider.min.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Ensure you are using css-loader

export default createVuetify({
  icons: {
    defaultSet: 'mdi'
  }
})

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
