<!-- app.vue -->
<template>
  <f7-app :params="f7params">
    <!-- Current View/Router, initial page will be loaded from home.vue component -->
    <f7-view main url="/"></f7-view>
  </f7-app>
</template>

<script>
/* Import pages components */
import HomePage from "./home.vue";
import AboutPage from "./about.vue";
import LoginPage from "./login.vue";

/*
  Now we need to map components to routes.
  We need to pass them along with the F7 app parameters to <f7-app> component
  */

export default {
  data() {
    return {
      // app params
      f7params: {
        name: "My App",
        id: "com.myapp.test",
        // specify routes for app
        routes: [
          {
            path: "/",
            component: HomePage
          },
          {
            path: "/about/",
            component: AboutPage
          },
          {
            path: "/login/",
            component: LoginPage
          }
          // ...
        ]
        // ...
      }
    };
  }
};
</script>
