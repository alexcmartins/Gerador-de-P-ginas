import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/LoginForm.vue";
import Dashboard from "../components/Dashboard.vue";
import Profile from "../components/Profile.vue";
import PageBuilder from "../components/PageBuilder.vue";
import Store from '../store';

// Definindo as rotas
const routes = [
  { path: "/login", component: Login },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      { path: "profile", component: Profile },
      { path: "page-builder", component: PageBuilder },
    ],
    meta: { requiresAuth: true },
  },
];

// Criando o roteador
const router = createRouter({
  history: createWebHistory(),  // Usando o histórico para navegação clean (sem #)
  routes,  // Definindo as rotas
});

// Middleware para verificar a autenticação
router.beforeEach((to, from, next) => {
  const isAuthenticated = (!!localStorage.getItem("token") && !!Store.state.user);
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next("/login");  // Redireciona para login se não autenticado
  } else {
    next();  // Continua com a navegação
  }
});

export { router };
// Criando a instância do Vue e associando o roteador
//const app = createApp(App);  // Assumindo que App.vue é o componente raiz
//app.use(router);  // Adiciona o roteador à instância do Vue
//app.mount("#app");  // Monta a app no elemento com id 'app'
