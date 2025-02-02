import { createApp } from "vue";
import { router } from './router';
import App from "./App.vue";
import store from "./store";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  md3,
})

const app = createApp(App);

app.use(vuetify);
app.use(router); // Usando o Vue Router
app.use(store); // Usando o Vuex

app.mount('#app');