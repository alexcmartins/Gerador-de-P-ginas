import './assets/main.css'
/*
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')*/

import { createApp } from "vue";
import { router } from './router';
import App from "./App.vue";
import store from "./store";

const app = createApp(App);

app.use(router); // Usando o Vue Router
app.use(store); // Usando o Vuex

app.mount('#app');