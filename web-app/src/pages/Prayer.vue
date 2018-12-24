<template id="prayer-page">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left"><v-ons-back-button>Home</v-ons-back-button></div>
      <div class="center">PRAYER</div>
    </v-ons-toolbar>
    <CardWithFloralBorder>
      <!-- <StepsList :steps="prayerSteps" /> -->
      <v-ons-list>
        <v-ons-list-item
          v-for="(step, idx) in prayerSteps"
          style="padding: 0px 10px;"
        >
          <template v-if="typeof step === 'string'">
            {{ step }}
          </template>

          <template v-else>
            <div style="text-align:center; margin:0px;">
              <p
                v-for="(prayer, idx) in step.prayer"
                :bind="idx"
                style="display:inline-block; margin:2px 0;"
              >
                <i>{{ prayer }}</i
                ><br />
              </p>
            </div>
          </template>
        </v-ons-list-item>
      </v-ons-list>
    </CardWithFloralBorder>
  </v-ons-page>
</template>

<style>
/* CSS goes here */
</style>

<script>
import CardWithFloralBorder from "../components/CardWithFloralBorder";
import StepsList from "../components/StepsList";
import prayerSteps from "../data/prayer";
export default {
  key: "PrayerPage",
  components: { CardWithFloralBorder, StepsList },
  data() {
    return {
      prayerSteps
    };
  }
};
</script>
