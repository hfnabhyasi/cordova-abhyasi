<template lang="html">
  <v-ons-card class="CardWithFloralBorder-cmp">
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
.CardWithFloralBorder-cmp .top-image {
  margin-bottom: -28px;
  width: 100%;
}
/* .CardWithFloralBorder-cmp .bottom-image {
  margin-top: -28px;
  transform: rotate(180deg);
} */

.CardWithFloralBorder-cmp {
  /* background-color: blue; */
}
.CardWithFloralBorder-cmp  {
    padding:  65px 0;
    background-image: url(/img/top-border.png), url(/img/bottom-border.png);
    background-size:     contain, contain;
    background-repeat:   no-repeat;
    background-position: top center, bottom center;
}
/* .CardWithFloralBorder-cmp .list .list-item {
  padding-top: 70px;
} */
</style>
