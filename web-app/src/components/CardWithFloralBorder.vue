<template lang="html">
  <v-ons-card
    class="CardWithFloralBorder-cmp"
    style="background-image:url(img/top-border.png), url(img/bottom-border.png);"
  >
    <div class="card-inner-wrapper">
      <!--  CONTENT SLOT -->
      <slot></slot>
      <!--  CONTENT SLOT -->
    </div>
  </v-ons-card>
</template>

<script>
export default {};
</script>

<style lang="css">
.CardWithFloralBorder-cmp  {
    padding:  65px 0;
    /* background-image: url("@~/img/top-border.png"), url("@~/img/bottom-border.png"); */
    background-size:     contain, contain;
    background-repeat:   no-repeat, no-repeat;
    background-position: top center, bottom center;
}
</style>
