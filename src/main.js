import { createApp } from 'vue'
import router from './router/index';
import App from './App.vue'
import './../src/assets/main.scss';

createApp(App).use(router).mount('#app')
