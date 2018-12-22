<template id="main">
  <v-ons-navigator swipeable
    :page-stack="pageStack"
    @push-page="pageStack.push($event)"
  ></v-ons-navigator>
</template>

<script>
import HomePage from "./pages/Home.vue";

export default {
  data() {
    return {
      pageStack: [HomePage]
    };
  }
};
</script>

<style>
/* CSS goes here */
</style>
