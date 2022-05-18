<script>
import { ref, onMounted } from "vue";
import axios from "axios";
async function checkUserLogged() {
  return new Promise((returnPromise) => {
    axios
      .get(`//${process.env.VUE_APP_API_ENDPOINT}/auth/test`)
      .then(function (response) {
        console.log(response);
        returnPromise({
          status: response.status,
        });
      })
      .catch(function (error) {
        console.log(error);
        returnPromise({
          status: error.response.status,
        });
      });
  });
}
export default {
  setup() {
    const isLoged = ref(false);
    onMounted(async (isLoged) => {
      const userLoggedVar = await checkUserLogged();
      console.log(userLoggedVar);
      let aux = false;
      if (userLoggedVar.status == 200) {
        console.log("true");
        aux = true;
      } else {
        console.log("false");
        aux = false;
      }
      console.log(aux);
      isLoged = ref(aux);
      return isLoged;
    });
    return { isLoged };
  },
};
</script>

<template>
  <nav>
    <div v-if="isLoged">
      <router-link to="/dashboard">dashboard</router-link> |
      <router-link to="/logout">logout</router-link>
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Regiser</router-link>
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
