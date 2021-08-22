import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Create const object vue
const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')

