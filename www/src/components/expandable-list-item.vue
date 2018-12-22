<template lang="html">
  <v-ons-list-item expandable :expanded.sync="isExpanded" @click="closeAll($event);">
    {{ cmp.properties.title }}
    <div class="expandable-content">
        <v-ons-card>
          <i>
            {{ cmp.properties.content}}
          </i>
        </v-ons-card>
    </div>
  </v-ons-list-item>
</template>

<script>
import EventBus from "../Bus.js";

export default {
  props: ["cmp"],
  data() {
    return {
      isExpanded: true,
      numberOfTimesClicked: 0
    };
  },
  methods: {
    closeAll() {
      EventBus.$emit("ListItemClicked", this);
    }
  },
  mounted() {
    EventBus.$on("ListItemClicked", VueComponent => {
      if (this.numberOfTimesClicked > 0) {
        if (this !== VueComponent) {
          this.isExpanded = false;
        } else {
          this.isExpanded = true;
        }
      } else {
        this.numberOfTimesClicked += 1;
      }
    });
  }
};
</script>

<style lang="css">
</style>
