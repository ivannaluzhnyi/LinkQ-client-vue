import authService from "../Services/auth.service";

import router from "@/router";

import {
    AUTH_LOGIN_API_PLAT_FAILURE,
    AUTH_LOGIN_API_PLAT_REQUEST,
    AUTH_LOGIN_API_PLAT_SUCCESS,
    AUTH_REGISTER_API_PLAT_FAILURE,
    AUTH_REGISTER_API_PLAT_SUCCESS,
    AUTH_LOGIN_APOLLO_REQUEST,
    AUTH_LOGIN_APOLLO_SUCCESS,
    AUTH_LOGIN_APOLLO_FAILURE,
    AUTH_LOGOUT,
} from "./mutation-actions";

function login({ commit }, { email, password }) {
    commit(AUTH_LOGIN_API_PLAT_REQUEST, { email });
    commit(AUTH_LOGIN_APOLLO_REQUEST, { email });

    authService
        .login(email, password)
        .then((response) => {
            commit(AUTH_LOGIN_API_PLAT_SUCCESS, response);
            router.push("/admin");
        })
        .catch((error) => {
            commit(AUTH_LOGIN_API_PLAT_FAILURE, error);
        });

    authService
        .loginApollo(email, password)
        .then((response) => {
            commit(AUTH_LOGIN_APOLLO_SUCCESS, response);
        })
        .catch((error) => {
            commit(AUTH_LOGIN_APOLLO_FAILURE, error);
        });
}

function signUp({ commit }, props){
    authService
        .signUp(props)
        .then((response) => {
            commit(AUTH_REGISTER_API_PLAT_SUCCESS, response);
            return response
        })
        .catch((error) => {
            commit(AUTH_REGISTER_API_PLAT_FAILURE, error);
        });
}

function logout({ commit }) {
    authService.logout();
    commit(AUTH_LOGOUT);
    router.push("/");
}

export const actions = { login, logout, signUp};
