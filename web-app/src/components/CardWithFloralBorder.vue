<template lang="html">
  <v-ons-card class="CardWithFloralBorder-cmp">
    <img class="top-image" src="img/top-right-border.png" style="width:100%;" />
    <!--  CONTENT SLOT -->
    <slot></slot>
    <img
      class="bottom-image"
      src="img/top-right-border.png"
      style="width:100%;"
    />
  </v-ons-card>
</template>

<script>
export default {};
</script>

<style lang="css">
.CardWithFloralBorder-cmp .top-image {
  margin-bottom: -28px;
  width: 100%;
}
.CardWithFloralBorder-cmp .bottom-image {
  margin-top: -28px;
  transform: rotate(180deg);
}
</style>
