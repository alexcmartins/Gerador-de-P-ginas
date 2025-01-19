<template>
    <div class="dashboard">
      <!--<Sidebar @menuClick="changePage" />-->
      <Sidebar />
      <div class="content">
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from "./Sidebar.vue";
  
  export default {
    name: "Dashboard",
    components: {
      Sidebar,
    },
    /*
    methods: {
      changePage(page) {
        this.$router.push(page);
      },
    },*/
  };
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    height: 100vh;
  }
  .content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
  }
  </style>
  