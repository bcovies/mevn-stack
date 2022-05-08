<script>
export default {
  data() {
    return {
      email: "",
      passwd: "",
    };
  },
  methods: {
    onInputEmail(e) {
      this.email = e.target.value;
    },
    onInputPasswd(e) {
      this.passwd = e.target.value;
    },
    onSubmitLogin() {
      console.log("Sending to backend login informations...");
      console.log(`${this.email}:${this.passwd}`);
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
  <button type="submit" @click="onSubmitLogin">Login</button>
</template>
