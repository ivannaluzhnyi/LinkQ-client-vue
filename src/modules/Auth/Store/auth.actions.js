import authService from "../Services/auth.service";

import {
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
} from "./actionTypes";

function login({ dispatch, commit }, { username, password }) {
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
    commit("logout");
}
export { login, logout };
