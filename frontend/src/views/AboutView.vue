<template>
  <AboutComponent />
</template>

<script>
// @ is an alias to /src
import AboutComponent from "@/components/AboutComponent.vue";

export default {
  //Nome da classe exportada, no caso AboutView.vue
  name: "AboutView",
  components: {
    //Componentes que nela estão sendo utilizadas, neste caso, somente About.
    AboutComponent,
  },
};
</script>
