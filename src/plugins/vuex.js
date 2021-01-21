import Vue from "vue";
import Vuex from "vuex";

import { auth } from "@/modules/Auth/Store";
import { property } from "@/modules/Property/Store";
import { Properties } from "@/modules/Home/Store";
import { adminProperties } from "@/modules/Admin/Properties/Store";
import { adminUsers } from "@/modules/Admin/Users/Store";

import { adminSettings } from "@/modules/Admin/Store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        property,
        adminSettings,
        adminProperties,
        adminUsers,
        Properties
    },
});
