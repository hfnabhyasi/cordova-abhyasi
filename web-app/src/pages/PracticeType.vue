<template>
  <f7-page name="practice">
    <f7-navbar :title="practice" back-link="Back"> </f7-navbar>
    <f7-card> {{ practice }} </f7-card>
  </f7-page>
</template>
<script>
export default {
  props: ["practice"]
};
</script>
