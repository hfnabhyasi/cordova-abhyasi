<template>
  <f7-page name="login">
    <f7-navbar title="10 Maxims" back-link="Back"> </f7-navbar>
    <f7-card>
      <f7-list>
        <f7-list-item
          v-for="(maxim, idxProp, idx) in maximsData.maxims"
          :title="maxim.properties.title"
          :link="`/maxims/${idxProp}`"
        >
        </f7-list-item>
      </f7-list>
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
