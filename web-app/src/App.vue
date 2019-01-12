<!-- app.vue -->
<template>
  <f7-app :params="f7params">
    <!-- Current View/Router, initial page will be loaded from home.vue component -->
    <f7-view main url="/"></f7-view>
  </f7-app>
</template>

<script>
/* Import pages components */
import HomePage from "./pages/Home.vue";
import MaximsPage from "./pages/10Maxims.vue";
import RelaxationPage from "./pages/Relaxation.vue";
import MeditationPage from "./pages/Meditation.vue";
import CleaningPage from "./pages/Cleaning.vue";
import PrayerPage from "./pages/Prayer.vue";
import AEIOUPage from "./pages/AEIOU.vue";

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
            path: "/maxims/",
            component: MaximsPage
          },
          {
            path: "/relaxation/",
            component: RelaxationPage
          },
          {
            path: "/meditation/",
            component: MeditationPage
          },
          {
            path: "/cleaning/",
            component: CleaningPage
          },
          {
            path: "/prayer/",
            component: PrayerPage
          },
          {
            path: "/aeiou/",
            component: AEIOUPage
          }
          // ...
        ]
        // ...
      }
    };
  }
};
</script>
