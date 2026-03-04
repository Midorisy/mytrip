import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.css'
import App from './App.vue'
import router from './router'
import { pinia } from './store'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
