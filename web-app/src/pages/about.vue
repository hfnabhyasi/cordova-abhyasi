<template>
  <f7-page name="about">
    <f7-navbar title="About"></f7-navbar>
    <!-- Page content -->
    <f7-card>
      <f7-list>
        <f7-list-item @click="$f7router.back()" title="Back"></f7-list-item>
      </f7-list>
    </f7-card>
  </f7-page>
</template>
<script>
export default {};
</script>
