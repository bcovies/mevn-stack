<script>
import { ref } from "vue";
import axios from "axios";
axios.defaults.withCredentials = true;

export default {
  data() {
    return {
      userLoggedVar: "",
    };
  },
  methods: {
    checkUserLogged() {
      return new Promise((returnPromise) => {
        const URL = `//${process.env.VUE_APP_API_ENDPOINT}/auth/`;
        const config = {
          headers: {
            authorization: this.$storage.getStorageSync("token"),
          },
        };
        axios
          .get(URL, config)
          .then(function (response) {
            // console.log(response);
            returnPromise({
              status: response.status,
            });
          })
          .catch(function (error) {
            // console.log(error);
            returnPromise({
              status: error.response.status,
            });
          });
      });
    },
  },
  async beforeMount() {
    // console.log(this.$storage.getStorageSync("token"));
    const response = await this.checkUserLogged();
    if (response.status != 200) {
      this.isLoged = false;
    } else {
      this.isLoged = true;
    }
    console.log(response);
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
      <router-link to="/">Home</router-link> |
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
