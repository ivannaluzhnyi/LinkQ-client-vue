import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import plugins from "./plugins";

Vue.config.productionTip = false;

new Vue({
    router,
    ...plugins,
    render: (h) => h(App),
}).$mount("#app");
