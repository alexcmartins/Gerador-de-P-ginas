<template>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="email">E-mail:</label>
          <input type="email" v-model="email" placeholder="Email" required />
        </div>
        <div>
          <label for="password">Senha:</label>
          <input type="password" v-model="password" placeholder="Senha" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
        error: "",
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post("http://localhost:3000/api/login", {
            email: this.email,
            password: this.password,
          });
          const { token, user } = response.data;
  
          // Salva token e usuário no Vuex
          this.$store.commit("setUser", user);
          this.$store.commit("setToken", token);
  
          // Redireciona para o dashboard
          this.$router.push("/dashboard");
        } catch {
          this.error = "Credenciais inválidas";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  
  