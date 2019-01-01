<template>
  <f7-page name="home">
    <f7-navbar title="Abhyasi App"> </f7-navbar>
    <!-- Page content -->
    <f7-list>
      <f7-list-item> <f7-link href="/about/">10 Maxims</f7-link> </f7-list-item>
      <f7-list-item accordion-item title="Practice">
        <f7-accordion-content>
          <f7-list>
            <f7-list-item>
              <f7-link href="/login/">Relaxation</f7-link>
            </f7-list-item>
            <f7-list-item>
              <f7-link href="/login/">Meditation</f7-link>
            </f7-list-item>
            <f7-list-item>
              <f7-link href="/login/" animate="false">Cleaning</f7-link>
            </f7-list-item>
            <f7-list-item>
              <f7-link href="/login/">Prayer</f7-link>
            </f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-list-item>
    </f7-list>
    <br />
  </f7-page>
</template>
<script>
export default {};
</script>
