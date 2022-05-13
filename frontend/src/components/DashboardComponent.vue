<script>
import axios from "axios";
export default {
  async mounted() {
    const data = await this.checkSession();
    if (data.response.status != 200) {
      this.$router.push("/error");
    }
  },
  methods: {
    checkSession() {
      return new Promise((returnPromise) => {
        axios
          .get(`//${process.env.VUE_APP_API_ENDPOINT}/auth/dashboard`)
          .then(function (response) {
            console.log(response);
            // returnPromise({
            //   status: response.status,
            //   body: response.data,
            // });
            returnPromise(response);
          })
          .catch(function (error) {
            console.log(error);
            // returnPromise({
            //   status: error.response.status,
            //   body: error.response.data,
            // });
            returnPromise(error);
          });
      });
    },
  },
};
</script>

<template>
  <h1>Dashboard page</h1>
</template>
