<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      dob: "",
      phone: "",
      registerMessage: "",
    };
  },
  methods: {
    onInputEmail(e) {
      this.email = e.target.value;
    },
    onInputpassword(e) {
      this.password = e.target.value;
    },
    onInputDob(e) {
      this.dob = e.target.value;
    },
    onInputPhone(e) {
      this.phone = e.target.value;
    },
    register() {
      return new Promise((returnPromise) => {
        axios
          .post(`//${process.env.VUE_APP_API_ENDPOINT}/auth/register`, {
            email: this.email,
            password: this.password,
            dob: this.dob,
            phone: this.phone,
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
      console.log(`${this.email}:${this.password}:${this.dob}:${this.phone}`);
      const data = await this.register();

      if (data.status != "200") {
        // alert("There was an error:" + data.body.error);
        this.registerMessage = data.body.error;
      } else {
        this.registerMessage = "User registred with success!";
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>Register page</h1>
    <h2>{{ registerMessage }}</h2>
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
      <input
        :value="dob"
        @input="onInputDob"
        type="text"
        placeholder="Day of Birthday"
      />
      <br />
      <input
        :value="phone"
        @input="onInputPhone"
        type="text"
        placeholder="Phone"
      />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
