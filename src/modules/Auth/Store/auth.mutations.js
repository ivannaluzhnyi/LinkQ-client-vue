import {
    AUTH_LOGIN_API_PLAT_FAILURE,
    AUTH_LOGIN_API_PLAT_SUCCESS,
    AUTH_LOGIN_API_PLAT_REQUEST,
    AUTH_LOGIN_APOLLO_REQUEST,
    AUTH_LOGIN_APOLLO_SUCCESS,
    AUTH_LOGIN_APOLLO_FAILURE,
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
        state.loading = false;
    },
    [AUTH_LOGIN_API_PLAT_FAILURE](state) {
        state.loggedIn = false;
        state.user = null;
        state.loading = false;
    },
    [AUTH_LOGOUT](state) {
        state.loggedIn = false;
        state.user = null;
        state.apollo.loggedIn = false;
        state.apollo.user = null;
    },

    [AUTH_LOGIN_APOLLO_REQUEST](state, user) {
        state.apollo.user = user;
    },
    [AUTH_LOGIN_APOLLO_SUCCESS](state, user) {
        state.apollo.user = user;
        state.apollo.loggedIn = true;
    },
    [AUTH_LOGIN_APOLLO_FAILURE](state) {
        state.apollo.loggedIn = false;
        state.apollo.user = null;
    },
};
