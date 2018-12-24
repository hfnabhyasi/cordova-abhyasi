<template id="relaxation-page">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left"><v-ons-back-button></v-ons-back-button></div>
      <div class="center">RELAXATION</div>
    </v-ons-toolbar>

    <CardWithFloralBorder>
      <StepsList :steps="relaxationSteps" />
    </CardWithFloralBorder>

    <p style="text-align: center"></p>
  </v-ons-page>
</template>

<style></style>

<script>
import CardWithFloralBorder from "../components/CardWithFloralBorder";
import StepsList from "../components/StepsList";
import relaxationSteps from "../data/relaxation";
//
export default {
  key: "ReleaxationPage",
  components: { CardWithFloralBorder, StepsList },
  data() {
    return {
      relaxationSteps
    };
  }
};
</script>
