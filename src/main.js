import { createApp } from 'vue'
import App from './App.vue'
import store from './store';  // Importa el store

createApp(App).use(store).mount('#app')
