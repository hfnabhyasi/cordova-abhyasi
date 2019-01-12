<template>
  <f7-page name="home">
    <f7-navbar title="Home"></f7-navbar>
    <!-- Page content -->
    <f7-list accordion-list>
      <f7-list-item title="10 Maxims" link="/about/"></f7-list-item>
      <f7-list-item accordion-item title="Abhyaas / Practice">
        <f7-accordion-content>
          <f7-block>
            <f7-list>
              <f7-list-item title="Relaxation" link="/login/"></f7-list-item>
              <f7-list-item title="Meditation" link="/login/"></f7-list-item>
              <f7-list-item title="Cleaning" link="/login/"></f7-list-item>
              <f7-list-item title="Prayer" link="/login/"></f7-list-item>
            </f7-list>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {};
</script>
