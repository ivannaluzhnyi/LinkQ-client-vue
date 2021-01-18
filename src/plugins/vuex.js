import Vue from "vue";
import Vuex from "vuex";

import { auth } from "@/modules/Auth/Store";
import { property } from "@/modules/Property/Store";
import { Properties } from "@/modules/Home/Store";
import { adminProperties } from "@/modules/Admin/Properties/Store";

import { adminSettings } from "@/core/Admin/Store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        property,
        adminSettings,
        adminProperties,
        Properties
    },
});
