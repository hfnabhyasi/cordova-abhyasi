// ONSEN UI CSS modules
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
// ONSEN JS module
import VueOnsen from "vue-onsenui"; // This imports 'onsenui', so no need to import it separately

// integrate OnsenUI with Vue
Vue.use(VueOnsen); // VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
    render: h =>
        h(App, {
            props: {title: 'HFN Abhyaasi'}
        })
}).$mount("#app");

// Webpack CSS import
// JS import
