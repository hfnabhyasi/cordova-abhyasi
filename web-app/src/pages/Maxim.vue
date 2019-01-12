<template>
  <f7-page name="login">
    <f7-navbar title="Maxim 1" back-link="Back"> </f7-navbar>
    <f7-card>
      <f7-list> <f7-list-item title="Maxim Page"> </f7-list-item> </f7-list>
    </f7-card>
  </f7-page>
</template>
<script>
import maximsData from "../data/10Maxims";

export default {
  data() {
    return { maximsData };
  }
};
</script>
