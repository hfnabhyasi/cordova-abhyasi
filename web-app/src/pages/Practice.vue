<template>
  <f7-page name="practice">
    <f7-navbar title="Practice/Abhyaas" back-link="Back"> </f7-navbar>
    <f7-card>
      <f7-list>
        <f7-list-item
          v-for="item in listItems"
          :title="item.title"
          :link="item.link"
          no-chevron
        ></f7-list-item>
      </f7-list>
    </f7-card>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      listItems: {
        relaxation: {
          title: "Relaxation",
          link: "/practice/relaxation"
        },
        meditation: {
          title: "Meditation",
          link: "/practice/meditation"
        },
        cleaning: {
          title: "Cleaning",
          link: "/practice/cleaning"
        },
        prayer: {
          title: "Prayer",
          link: "/practice/prayer"
        }
      }
    };
  }
};
</script>
