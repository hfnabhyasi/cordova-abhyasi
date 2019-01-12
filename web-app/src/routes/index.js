
import HomePage from "../pages/Home.vue";
import MaximsPage from "../pages/10Maxims.vue";
import RelaxationPage from "../pages/Relaxation.vue";
import MeditationPage from "../pages/Meditation.vue";
import CleaningPage from "../pages/Cleaning.vue";
import PrayerPage from "../pages/Prayer.vue";
import AEIOUPage from "../pages/AEIOU.vue";
import MaximPage from "../pages/Maxim.vue";
import PracticePage from "../pages/Practice.vue";

export default [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/maxims/",
    component: MaximsPage
  },{
    path:"/maxims/:maxim",
    component: MaximPage
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
    path: "/practice/",
    component: PracticePage
  },
  {
    path: "/aeiou/",
    component: AEIOUPage
  }
]
