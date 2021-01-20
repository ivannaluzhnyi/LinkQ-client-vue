import {
    SET_CUSTOMIZER_DRAWER,
    SET_SIDEBAR_COLOR,
    SET_SIDEBAR_DRAWER,
} from "./mutation-actions";

const initialState = {
    Sidebar_drawer: null,
    Customizer_drawer: false,
    SidebarColor: "white",
    SidebarBg: "",
};

export default {
    namespaced: true,
    state: initialState,
    mutations: {
        [SET_SIDEBAR_DRAWER](state, payload) {
            state.Sidebar_drawer = payload;
        },
        [SET_CUSTOMIZER_DRAWER](state, payload) {
            state.Customizer_drawer = payload;
        },
        [SET_SIDEBAR_COLOR](state, payload) {
            state.SidebarColor = payload;
        },
    },
};
