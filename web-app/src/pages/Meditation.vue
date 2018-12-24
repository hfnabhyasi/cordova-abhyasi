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
export default {
  key: "MeditationPage",
  components: { StepsList, CardWithFloralBorder },
  data() {
    return {
      meditationSteps: [
        "Sit comfortably in a place where you can meditate without noise or distractions, preferably at the same place, same time daily.",
        "Turn off your phones and other devices.",
        "Gently close your eyes and relax. Site with your back upright but not rigid.",
        "Take a couple of minutes to relax your body using the Heartfulness relaxation.",
        "Turn your attention inwards and take a moment to observe yourself.  Then, gently make a supposition that there is Divine Light in your heart.",
        "Think that the light is attracting you from within.  Do this in a gentle and natural way.  There is no need to concentrate.",
        "If you find your awareness drifting to other thoughts, gently come back to the idea of light in your heart.",
        "Let your awareness rest in your heart.  Feel yourself melting into this awareness.  You might relax into a deeper state beyond awareness.  That is okay.",
        "Stay in meditation until you feel it is completed."
      ]
    };
  }
};
</script>
