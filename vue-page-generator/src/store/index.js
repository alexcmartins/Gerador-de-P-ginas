import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, user) {
      
      state.user = user;
      console.log("Setting user:", user);  // Verifica os dados que estão sendo setados
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token); // Persistência no navegador
    },
    clearUser(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
  },
});
