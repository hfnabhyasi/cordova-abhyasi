<template>
  <f7-page name="home">
    <f7-navbar title="Home"></f7-navbar>
    <!-- Page content -->
    <f7-card>
      <f7-list accordion-list>
        <f7-list-item
          title="10 Maxims"
          link="/maxims/"
          no-chevron
        ></f7-list-item>
        <f7-list-item accordion-item title="Abhyaas / Practice">
          <f7-accordion-content>
            <f7-block>
              <f7-list>
                <f7-list-item
                  title="Relaxation"
                  link="/relaxation/"
                  no-chevron
                ></f7-list-item>
                <f7-list-item
                  title="Meditation"
                  link="/meditation/"
                  no-chevron
                ></f7-list-item>
                <f7-list-item
                  title="Cleaning"
                  link="/cleaning/"
                  no-chevron
                ></f7-list-item>
                <f7-list-item
                  title="Prayer"
                  link="/prayer/"
                  no-chevron
                ></f7-list-item>
              </f7-list>
            </f7-block>
          </f7-accordion-content>
        </f7-list-item>
        <f7-list-item
          title="A E I O U of Spirituality"
          link="/aeiou/"
          no-chevron
        ></f7-list-item>
      </f7-list>
    </f7-card>
  </f7-page>
</template>
<script>
export default {};
</script>
