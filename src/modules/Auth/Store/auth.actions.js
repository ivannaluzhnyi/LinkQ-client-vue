import authService from "../Services/auth.service";

import {
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT,
} from "./mutation-actions";

function login({ commit }, { username, password }) {
    commit(AUTH_LOGIN_REQUEST, { username });

    authService.login(username, password).then(
        (response) => {
            commit(AUTH_LOGIN_SUCCESS, response);
        },
        (error) => {
            commit(AUTH_LOGIN_FAILURE, error);
        }
    );
}

function logout({ commit }) {
    authService.logout();
    commit(AUTH_LOGOUT);
}
export const actions = { login, logout };
