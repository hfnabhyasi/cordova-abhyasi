<template id="page2">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left"><v-ons-back-button>Home</v-ons-back-button></div>
      <div class="center">CLEANING</div>
    </v-ons-toolbar>
    <CardWithFloralBorder>
      <StepsList :steps="cleaningSteps" />
    </CardWithFloralBorder>
  </v-ons-page>
</template>

<style>
/* CSS goes here */
</style>

<script>
import CardWithFloralBorder from "../components/CardWithFloralBorder";
import StepsList from "../components/StepsList";
import cleaningSteps from "../data/cleaning.json";

export default {
  key: "CleaningPage",
  components: { StepsList, CardWithFloralBorder },
  data() {
    return {
      cleaningSteps
    };
  }
};
</script>
