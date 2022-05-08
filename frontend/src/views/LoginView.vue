<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    onInput(e) {
      this.email = e.target.value;
    },
  },
};
</script>

<template>
  <h1>Login page</h1>
  <input :value="email" @input="onInput" type="email" placeholder="Email" />
  <p>{{ email }}</p>
</template>
