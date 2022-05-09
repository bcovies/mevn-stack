<template>
  <RegisterFormComponent />
</template>

<script>
// @ is an alias to /src
import RegisterFormComponent from "@/components/RegisterFormComponent.vue";

export default {
  //Nome da classe exportada, no caso AboutView.vue
  name: "RegisterView",
  components: {
    //Componentes que nela estão sendo utilizadas, neste caso, somente About.
    RegisterFormComponent,
  },
};
</script>
