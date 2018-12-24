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

export default {
  key: "CleaningPage",
  components: { StepsList, CardWithFloralBorder },
  data() {
    return {
      cleaningSteps: [
        "Sit in a comfortable position with the intention to remove all the impressions accumulated during the day.",
        "Close your eyes and feel relaxed.",
        "Imagine all the complexities and impurities, are leaving your entire system.",
        "They are going out of the back, from the top of your head to your tailbone.",
        "Feel they are leaving your system as smoke.",
        "Remain alert during the entire process, like a witness to the clouds passing in the sky.",
        "Gently accelerate this process with confidence and determination, applying your will as needed.",
        "If your attention drifts and events of the day begin to come to mind, gently bring your focus back to the cleaning.",
        "As the impressions are leaving from your back you will start to feel light in your heart.",
        "Continue this process for up to twenty to twenty-five minutes.",
        "Experiencing ineer lightness means you are connected with the Source.  Feel a current of purity coming from the Source and entering your system from the front.",
        "This current is flowing throught your system, carring away any remaining complexities and impurities.",
        "You have now returned to a simpler, purer and more balanced state.  Every cell of your body is emanating simplicity, lightness and purity."
      ]
    };
  }
};
</script>
