<template>
  <DashboardComponent />
</template>

<script>
// @ is an alias to /src
import DashboardComponent from "@/components/DashboardComponent.vue";

export default {
  //Nome da classe exportada, no caso AboutView.vue
  name: "DashboardView",
  components: {
    //Componentes que nela estão sendo utilizadas, neste caso, somente About.
    DashboardComponent,
  },
};
</script>
