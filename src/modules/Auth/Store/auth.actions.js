import authService from "../Services/auth.service";

import {
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT,
} from "./mutation-actions";

function login({ commit }, { email, password }) {
    commit(AUTH_LOGIN_REQUEST, { email });

    authService
        .login(email, password)
        .then((response) => {
            commit(AUTH_LOGIN_SUCCESS, response);
        })
        .catch((error) => {
            console.log("error > ", error);
            commit(AUTH_LOGIN_FAILURE, error);
        });
}

function logout({ commit }) {
    authService.logout();
    commit(AUTH_LOGOUT);
}
export const actions = { login, logout };
