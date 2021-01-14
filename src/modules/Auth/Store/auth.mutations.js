import {
    AUTH_LOGIN_API_PLAT_FAILURE,
    AUTH_LOGIN_API_PLAT_SUCCESS,
    AUTH_LOGIN_API_PLAT_REQUEST,
    AUTH_LOGOUT,
} from "./mutation-actions";

export const mutations = {
    [AUTH_LOGIN_API_PLAT_REQUEST](state, user) {
        state.loggedIn = false;
        state.user = user;
    },
    [AUTH_LOGIN_API_PLAT_SUCCESS](state, user) {
        state.loggedIn = true;
        state.user = user;
    },
    [AUTH_LOGIN_API_PLAT_FAILURE](state) {
        state.loggedIn = false;
        state.user = null;
    },
    [AUTH_LOGOUT](state) {
        state.loggedIn = false;
        state.user = null;
    },
};
