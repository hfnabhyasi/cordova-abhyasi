<template lang="html">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Home</div>
    </v-ons-toolbar>

    <!--  MENU -->
    <v-ons-list>
      <v-ons-list-item @click="push('TenMaximsPage');" tappable>10 Maxims</v-ons-list-item>
      <v-ons-list-item expandable :expanded.sync="isExpanded">
        Practice / Abhyaas
        <div class="expandable-content">
          <v-ons-list>
            <v-ons-list-item modifier="longdivider" tappable @click="push('PrayerPage')">Prayer</v-ons-list-item>
            <v-ons-list-item modifier="longdivider" tappable @click="push('MeditationPage')">Meditation</v-ons-list-item>
            <v-ons-list-item modifier="longdivider" tappable @click="push('CleaningPage')">Cleaning</v-ons-list-item>
            <v-ons-list-item modifier="longdivider" tappable @click="push('RelaxationPage')">Relaxation</v-ons-list-item>
          </v-ons-list>
        </div>
      </v-ons-list-item>
    </v-ons-list>

  </v-ons-page>
</template>

<script>
import TenMaximsPage from "./10Maxims.vue";
import RelaxationPage from "./Relaxation.vue";
import PrayerPage from "./Prayer.vue";
import MeditationPage from "./Meditation.vue";
import CleaningPage from "./Cleaning.vue";

const pages = {
  TenMaximsPage,
  RelaxationPage,
  PrayerPage,
  MeditationPage,
  CleaningPage
};

export default {
  data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    push(pageName) {
      this.$emit("push-page", pages[pageName]);
    }
  }
};
</script>

<style lang="css">
</style>
