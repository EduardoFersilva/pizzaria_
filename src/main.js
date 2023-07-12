import {createApp} from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'

const app = createApp(App)
app.use(router)
app.use(KeenSlider)
app.mount('#app')
