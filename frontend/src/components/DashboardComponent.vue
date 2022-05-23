<script>
import axios from "axios";
export default {
  async mounted() {
    // console.log("token do dashboard: " + this.$storage.getStorageSync("token"));
    const data = await this.checkSession();
    if (data.status != 200) {
      this.$router.push("/");
      console.log("User not authorized!");
    } else {
      this.userName = data.body.email;
    }
  },
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    checkSession() {
      return new Promise((returnPromise) => {
        const URL = `//${process.env.VUE_APP_API_ENDPOINT}/auth/dashboard`;
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
              body: response.data,
            });
          })
          .catch(function (error) {
            // console.log(error);
            returnPromise({
              status: error.response.status,
              body: error.response.data,
            });
          });
      });
    },
  },
};
</script>

<template>
  <div>
    <h1>Welcome, {{ userName }}</h1>
  </div>
</template>
