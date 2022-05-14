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
    getToken() {
      return new Promise((returnPromise) => {
        axios
          .post(`//${process.env.VUE_APP_API_ENDPOINT}/auth/token`, {
            email: this.email,
            password: this.password,
          })
          .then(function (response) {
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
    login(token) {
      return new Promise((returnPromise) => {
        axios
          .get(`//${process.env.VUE_APP_API_ENDPOINT}/auth/login`, {
            headers: {
              authorization: `${token}`,
            },
          })
          .then(function (response) {
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
      const token = await this.getToken();

      if (token.status != "200") {
        // alert("There was an error:" + data.body.error);
        this.loginMessage = token.body.error;
      } else {
        const data = await this.login(token.body.token);
        if (data.status != "200") {
          this.loginMessage = "User do not exists!";
        } else {
          this.loginMessage =
            "User " + data.body.userId + " logged! Being redirect soon!";
          this.$router.push("/dashboard");
        }
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
