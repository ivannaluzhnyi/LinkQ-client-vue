import Vue from "vue";
import Vuex from "vuex";

import { auth } from "@/modules/Auth/Store";
import { property } from "@/modules/Property/Store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { auth, property },
});
