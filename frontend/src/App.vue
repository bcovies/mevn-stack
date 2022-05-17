<script setup>
import { ref } from "vue";
const isLoged = ref(true);
console.log(isLoged);
</script>

<template>
  <nav>
    <div v-if="isLoged">
      <router-link to="/dashboard">dashboard</router-link> |
      <router-link to="/logout">logout</router-link>
    </div>
    <div v-else>
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Regiser</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
