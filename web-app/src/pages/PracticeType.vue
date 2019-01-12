<template>
  <f7-page name="practice">
    <f7-navbar class="capitalize" :title="practice" back-link="Back">
    </f7-navbar>
    <f7-card>
      <f7-block>
        <h1 class="capitalize">{{ practice }}</h1>
        <ul>
          <li v-for="step in Practice[practice]">
            <p>{{ step }}</p>
          </li>
        </ul>
      </f7-block>
    </f7-card>
  </f7-page>
</template>
<script>
import Practice from "../data/Practice";
export default {
  data() {
    return { Practice };
  },
  props: ["practice"]
};
</script>
<style scoped>
.capitalize {
  text-transform: capitalize;
}
ul {
  padding-bottom: 20px;
  padding-left: 15px;
}
</style>
