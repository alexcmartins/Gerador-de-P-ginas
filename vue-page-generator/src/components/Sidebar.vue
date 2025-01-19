<template>
    <div class="sidebar">
      <!--<button @click="$emit('menuClick', '/profile')">Perfil</button>
      <button @click="$emit('menuClick', '/page-builder')">Criar Nova Página</button>
      <button @click="navigateTo('profile')">Perfil</button>
      <button @click="navigateTo('page-builder')">Criar Página</button>-->
      <router-link to="/dashboard/profile">
        <button>Perfil</button>
      </router-link>
      <router-link to="/dashboard/page-builder">
        <button>Criar Página</button>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "Sidebar",
    /*
    methods: {
    navigateTo(route) {
      this.$router.push(`/dashboard/${route}`);
    }
  }*/
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    background-color: #333;
    color: #fff;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  button {
    margin: 10px 0;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  button:hover {
    text-decoration: underline;
  }
  </style>
  