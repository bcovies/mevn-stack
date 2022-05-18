<script>
import { ref } from "vue";
import axios from "axios";

export default {
  data() {
    return {
      userLoggedVar: "",
    };
  },
  methods: {
    checkUserLogged() {
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
    },
  },
  async mounted() {
    this.userLoggedVar = await this.checkUserLogged();
    // console.log(this.userLoggedVar.status);
    if (this.userLoggedVar.status == 200) {
      this.isLoged = true;
    } else {
      this.isLoged = false;
    }
    // console.log("teste" + this.isLoged);
  },
  setup() {
    const isLoged = ref(true);
    return {
      isLoged,
    };
  },
};
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
    <router-view />
  </nav>
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
