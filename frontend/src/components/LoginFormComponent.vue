<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      loginMessage: "",
    };
  },
  methods: {
    onInputEmail(e) {
      this.email = e.target.value;
    },
    onInputpassword(e) {
      this.password = e.target.value;
    },
    loginGetToken() {
      return new Promise((returnPromise) => {
        axios
          .post(`//${process.env.VUE_APP_API_ENDPOINT}/auth/login`, {
            email: this.email,
            password: this.password,
          })
          .then(function (response) {
            // console.log(response);
            returnPromise({
              status: response.status,
              body: response.data,
            });
          })
          .catch(function (error) {
            returnPromise({
              status: error.response.status,
              body: error.response.data,
            });
          });
      });
    },
    async onSubmitLogin() {
      console.log(
        `Sending to backend (${process.env.VUE_APP_API_ENDPOINT}) login informations...`
      );
      // console.log(`${this.email}:${this.password}`);
      const token = await this.loginGetToken();

      if (token.status != "200") {
        // alert("There was an error:" + data.body.error);
        this.loginMessage = token.body.error;
      } else {
        this.$storage.setStorageSync("token", token.body.token);
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>Login page</h1>
    <h2>{{ loginMessage }}</h2>
    <form @submit.prevent="onSubmitLogin">
      <input
        :value="email"
        @input="onInputEmail"
        type="email"
        placeholder="Email"
      />
      <br />
      <input
        :value="password"
        @input="onInputpassword"
        type="password"
        placeholder="Password"
      />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
