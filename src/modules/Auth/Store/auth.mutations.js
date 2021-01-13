import {
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGOUT,
} from "./mutation-actions";

export const mutations = {
    [AUTH_LOGIN_REQUEST](state, user) {
        state.loggedIn = false;
        state.user = user;
    },
    [AUTH_LOGIN_SUCCESS](state, user) {
        state.loggedIn = true;
        state.user = user;
    },
    [AUTH_LOGIN_FAILURE](state) {
        state.loggedIn = false;
        state.user = null;
    },
    [AUTH_LOGOUT](state) {
        state.loggedIn = false;
        state.user = null;
    },
};
