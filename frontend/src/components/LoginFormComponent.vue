<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      passwd: "",
      dob: "",
      phone: "",
    };
  },
  methods: {
    onInputEmail(e) {
      this.email = e.target.value;
    },
    onInputPasswd(e) {
      this.passwd = e.target.value;
    },
    onInputDob(e) {
      this.dob = e.target.value;
    },
    onInputPhone(e) {
      this.phone = e.target.value;
    },
    async onSubmitLogin() {
      console.log(
        `Sending to backend (${process.env.VUE_APP_API_ENDPOINT}) login informations...`
      );
      console.log(`${this.email}:${this.passwd}:${this.dob}:${this.phone}`);
      try {
        const data = await axios.post(
          `http://${process.env.VUE_APP_API_ENDPOINT}/auth/register`,
          {
            email: this.email,
            passwd: this.passwd,
            dob: this.passwd,
            phone: this.passwd,
          }
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <h1>Login page</h1>
  <input
    :value="email"
    @input="onInputEmail"
    type="email"
    placeholder="Email"
  />
  <br />
  <input
    :value="passwd"
    @input="onInputPasswd"
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
  <input :value="phone" @input="onInputPhone" type="text" placeholder="Phone" />
  <br />
  <button @click="onSubmitLogin">Login</button>
</template>
