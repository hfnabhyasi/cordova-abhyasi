<template lang="html">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center"><i class="fa fa-home"></i> HOME</div>
    </v-ons-toolbar>

    <!--  MENU -->
    <CardWithFloralBorder>
      <v-ons-list>
        <v-ons-list-item @click="push('TenMaximsPage')"
          >10 Maxims</v-ons-list-item
        >
        <v-ons-list-item expandable :expanded.sync="isExpanded">
          Practice / Abhyaas
          <div class="expandable-content">
            <v-ons-list>
              <v-ons-list-item
                v-for="link in practiceMenuItems"
                modifier="longdivider"
                @click="push(link.page)"
                >{{ link.label }} {{ isExpanded }}</v-ons-list-item
              >
            </v-ons-list>
          </div>
        </v-ons-list-item>
      </v-ons-list>
    </CardWithFloralBorder>
  </v-ons-page>
</template>

<script>
import TenMaximsPage from "./10Maxims.vue";
import RelaxationPage from "./Relaxation.vue";
import PrayerPage from "./Prayer.vue";
import MeditationPage from "./Meditation.vue";
import CleaningPage from "./Cleaning.vue";
import CardWithFloralBorder from "../components/CardWithFloralBorder.vue";

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
      isExpanded: false,
      practiceMenuItems: [
        {
          page: "RelaxationPage",
          label: "Relaxation"
        },
        {
          page: "MeditationPage",
          label: "Meditation"
        },
        {
          page: "CleaningPage",
          label: "Cleaning"
        },
        {
          page: "PrayerPage",
          label: "Prayer"
        }
      ]
    };
  },
  components: { CardWithFloralBorder },
  methods: {
    push(pageName) {
      this.isExpanded = false;
      this.$emit("push-page", {
        extends: pages[pageName],
        onsNavigatorOptions: {
          animation: "slide",
          animationOptions: { duration: 0.5 }
        }
      });
    }
  }
};
</script>

<style lang="css"></style>
