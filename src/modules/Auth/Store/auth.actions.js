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
            router.push("/admin/dashboard");
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

function signUp({ commit }, props) {

    authService
        .getuserByEmail(props.email)
        .then((response) => {
            if (response.length == 1) {
                commit(AUTH_REGISTER_API_PLAT_FAILURE, { message: `Le compte ${props.email} existe déjà.` });
                return
            }
            authService
                .signUp(props)
                .then((response) => {
                    commit(AUTH_REGISTER_API_PLAT_SUCCESS, { message: "Votre compte à bien été créer, vous pouvez maintenant vous connectez !" });
                    return response
                })
                .catch((error) => {
                    console.log('error :>> ', error);
                    commit(AUTH_REGISTER_API_PLAT_FAILURE, { message: "Une erreur c'est produite." });
                });
            authService
                .signUpApollo(props)
                .then((response) => {
                    commit(AUTH_REGISTER_API_PLAT_SUCCESS, response);
                    return response
                })
                .catch((error) => {
                    commit(AUTH_REGISTER_API_PLAT_FAILURE, error);
                });
        })

}

function logout({ commit }) {
    authService.logout();
    commit(AUTH_LOGOUT);
    router.push("/");
}

export const actions = { login, logout, signUp};
