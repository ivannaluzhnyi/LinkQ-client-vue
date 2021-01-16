import authService from "../Services/auth.service";

import router from "@/router";

import {
    AUTH_LOGIN_API_PLAT_FAILURE,
    AUTH_LOGIN_API_PLAT_REQUEST,
    AUTH_LOGIN_API_PLAT_SUCCESS,
    AUTH_LOGOUT,
} from "./mutation-actions";

function login({ commit }, { email, password }) {
    commit(AUTH_LOGIN_API_PLAT_REQUEST, { email });

    authService
        .login(email, password)
        .then((response) => {
            commit(AUTH_LOGIN_API_PLAT_SUCCESS, response);
            router.push("/admin");
        })
        .catch((error) => {
            commit(AUTH_LOGIN_API_PLAT_FAILURE, error);
        });
}

function logout({ commit }) {
    authService.logout();
    commit(AUTH_LOGOUT);
    router.push("/");
}

export const actions = { login, logout };
