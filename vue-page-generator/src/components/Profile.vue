<template>
    <div>
      <h2>Perfil</h2>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Nome:</strong> {{ user.name }}</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  /*
  import { mapState } from "vuex";
  
  export default {
    computed: {
      ...mapState(["user"]),
    },
    methods: {
      logout() {
        this.$store.commit("clearUser");
        this.$router.push("/login");
      },
    },
  };*/
  
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
  },
  watch: {
    user(newUser) {
      console.log("User data updated: ", newUser);
    },
  },
  mounted() {
    console.log("User data on mount: ", this.user);
  },
  methods: {
    logout() {
      this.$store.commit("clearUser");
      this.$router.push("/login");
    },
  },
};

  </script>
  