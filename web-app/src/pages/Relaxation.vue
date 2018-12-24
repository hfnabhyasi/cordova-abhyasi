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
//
export default {
  key: "ReleaxationPage",
  components: { CardWithFloralBorder, StepsList },
  data() {
    return {
      relaxationSteps: [
        "Sit comfortably and close your eyes very softly and very gently.",
        "Let's begin with the toes. Wiggle your toes. Now feel them relax.",
        "Relax your ankles and feet.  Feel energy move up from the Earth...up your feet to your knees relaxing the legs.",
        "Relax your thighs.",
        "The energy moves up your legs... relaxing them.  Now, deeply relax your hips...stomach...and waist.",
        "Relax your back.  From the top to the bottom the entire back is relaxed.",
        "Relax your upper arms.  Relax each muscle in your forearms...your hands...right up to your finger tips.",
        "Relax the neck muscles.  Move your awareness up to the face.  Relax the jaws...mouth...nose...eyes...earlobes...facial muscles...forehead..all the way to the top of your head.",
        "Feel how your whole body is now completely relaxed.",
        "Move your attention to your heart.  As you rest there, gently have the idea that Divine Light is illuminating your heart from within and is attracting or pulling your attention inward...",
        "Feel immersed in the love and light in your heart.",
        "Remain still and quiet, and slowly become absorbed in yourself.",
        "Remain absorbed within this deep silence for as long as you want, until you feel ready to come out again."
      ]
    };
  }
};
</script>
