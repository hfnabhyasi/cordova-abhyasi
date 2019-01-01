<template>
  <!-- Main Framework7 App component where we pass Framework7 params -->
  <f7-app :params="$root.f7params">
    <f7-statusbar></f7-statusbar>
    <f7-view main>
      <!-- Initial Page -->
      <f7-page>
        <f7-navbar title="Awesome App"></f7-navbar>
        <f7-toolbar>
          <f7-link>Link 1</f7-link>
          <f7-link>Link 2</f7-link>
        </f7-toolbar>
        <p>Page content goes here</p>
        <f7-link href="/about/">About App</f7-link>
      </f7-page>
    </f7-view>
  </f7-app>
</template>
<script>
// import routes from "./routes.js";

export default {
  data() {
    return {
      // Framework7 parameters that we pass to <f7-app> component
      f7params: {
        // Array with app routes
        // routes,
        // App Name
        name: "My App",
        // App id
        id: "com.myapp.test"
        // ...
      }
    };
  }
};
</script>
