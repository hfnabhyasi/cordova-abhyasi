<template lang="html">
  <v-ons-list class="StepsList-cmp">
    <v-ons-list-item
      modifier="longdivider"
      v-for="(step, idx) in steps"
      :bind="idx"
    >
      <span><i class="fa fa-circle-o"></i> &nbsp;{{ step }}</span>
    </v-ons-list-item>
  </v-ons-list>
</template>

<style lang="css"></style>

<script>
export default {
  props: ["steps"]
};
</script>
