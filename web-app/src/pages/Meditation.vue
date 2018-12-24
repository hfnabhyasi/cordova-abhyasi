<template id="meditation-page">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left"><v-ons-back-button>Home</v-ons-back-button></div>
      <div class="center">MEDITATION</div>
    </v-ons-toolbar>

    <CardWithFloralBorder>
      <StepsList :steps="meditationSteps" />
    </CardWithFloralBorder>
  </v-ons-page>
</template>

<style>
/* CSS goes here */
</style>

<script>
import CardWithFloralBorder from "../components/CardWithFloralBorder";
import StepsList from "../components/StepsList";
import meditationSteps from "../data/meditation.json";
export default {
  key: "MeditationPage",
  components: { StepsList, CardWithFloralBorder },
  data() {
    return {
      meditationSteps
    };
  }
};
</script>
