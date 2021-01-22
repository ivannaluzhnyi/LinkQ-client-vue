import {
    AUTH_LOGIN_API_PLAT_FAILURE,
    AUTH_LOGIN_API_PLAT_SUCCESS,
    AUTH_LOGIN_API_PLAT_REQUEST,
    AUTH_LOGIN_APOLLO_REQUEST,
    AUTH_LOGIN_APOLLO_SUCCESS,
    AUTH_LOGIN_APOLLO_FAILURE,
    AUTH_LOGOUT,
    AUTH_REGISTER_API_PLAT_SUCCESS,
    AUTH_REGISTER_API_PLAT_FAILURE
} from "./mutation-actions";

export const mutations = {
    [AUTH_LOGIN_API_PLAT_REQUEST](state) {
        state.loggedIn = false;
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

    [AUTH_LOGIN_APOLLO_REQUEST](state) {
        state.apollo.loggedIn = false;
        state.apollo.user = null;
    },
    [AUTH_LOGIN_APOLLO_SUCCESS](state, user) {
        state.apollo.user = user;
        state.apollo.loggedIn = true;
    },
    [AUTH_LOGIN_APOLLO_FAILURE](state) {
        state.apollo.loggedIn = false;
        state.apollo.user = null;
    },
    [AUTH_REGISTER_API_PLAT_SUCCESS](state, {message}){
        state.message_success = message
        state.message_error = ""
    },
    [AUTH_REGISTER_API_PLAT_FAILURE](state, {message}){
        state.message_success = ""
        state.message_error = message
    }
};
