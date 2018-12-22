<template lang="html">
  <v-ons-list-item @click="dialogVisible = true">
    {{ cmp.properties.title }}
    <v-ons-dialog cancelable :visible.sync="dialogVisible" material>
      <v-ons-card>
        <h3>{{ cmp.properties.title }}</h3>
        <i> {{ cmp.properties.content }} </i>
      </v-ons-card>
    </v-ons-dialog>
  </v-ons-list-item>
</template>

<script>
export default {
  props: ["cmp"],
  data() {
    return {
      dialogVisible: false
    };
  }
};
</script>

<style lang="css"></style>
