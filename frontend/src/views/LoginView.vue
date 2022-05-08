<template>
  <LoginFormComponent />
</template>

<script>
// @ is an alias to /src
import LoginFormComponent from "@/components/LoginFormComponent.vue";

export default {
  //Nome da classe exportada, no caso AboutView.vue
  name: "LoginView",
  components: {
    //Componentes que nela estão sendo utilizadas, neste caso, somente About.
    LoginFormComponent,
  },
};
</script>
