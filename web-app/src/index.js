import "framework7/css/framework7.min.css";
import '@fortawesome/fontawesome-free/css/all.css'
import 'framework7-icons/css/framework7-icons.css'
import Vue from 'vue'
import Framework7 from 'framework7/framework7.esm.bundle.js'
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'
import App from './App.vue';

Framework7.use(Framework7Vue);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
