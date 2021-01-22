import { http } from "@/core/http";
import { decodeToken } from "@/core/utils/jwt";

import { apolloClient } from "@/plugins/apollo-client";
import { LOGIN_USER, REGISTER_USER } from "@/graphql/mutations";

import isAdminByUserObject from "../Utils/isAdminByUserObject";

/**
 *
 * @param {string} email
 * @param {string} password
 */
function login(email, password) {
    return http
        .post("authentication_token", { email, password })
        .then((response) => {
            const { data } = response;

            if (data.token) {
                localStorage.setItem("token", data.token);

                const { roles, username } = decodeToken(response.data.token);
                const userData = {
                    roles,
                    username,
                };
                localStorage.setItem("user", JSON.stringify(userData));

                return userData;
            }

            throw new Error("Token missing");
        });
}

/**
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise<Object>}
 */
function loginApollo(email, password) {
    return apolloClient
        .mutate({
            mutation: LOGIN_USER,
            variables: { email, password },
        })
        .then(async ({ data }) => {
            if (data.login.token) {
                localStorage.setItem("apollo-token", data.login.token);

                localStorage.setItem(
                    "apollo-user",
                    JSON.stringify(data.login.user)
                );

                await apolloClient.resetStore();
                return data.login.user;
            }

            throw new Error("Token missing");
        });
}

function signUp(props) {
    return http.post("users", props).then((response) => {
        const { data } = response;
        if (data) {
            return data;
        }
        throw new Error("Error connexion");
    });
}

function signUpApollo(props) {
    props.isActive = true;
    props.roles = {};
    return apolloClient
        .mutate({
            mutation: REGISTER_USER,
            variables: props,
        })
        .then((response) => {
            const { data } = response;
            if (data) {
                return data;
            }
            throw new Error("Error connexion");
        })
        .catch(async (error) => {
            console.error(error);
            return error;
        });
}

async function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    localStorage.removeItem("apollo-token");
    localStorage.removeItem("apollo-user");
    await apolloClient.resetStore();
}

/**
 * @returns {boolean}
 */
function isAuth() {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    return Boolean(!!user && !!token);
}

/**
 * @returns {boolean}
 */
function isAuthAdmin() {
    const token = localStorage.getItem("token");

    if (token) {
        const decodedToken = decodeToken(token);
        return isAdminByUserObject(decodedToken);
    }

    return false;
}

/**
 * @returns {boolean}
 */
function isAuthApollo() {
    const token = localStorage.getItem("apollo-token");

    return Boolean(token);
}

function getUsersFromStorage() {
    const user = JSON.parse(localStorage.getItem("user"));
    const apolloUser = JSON.parse(localStorage.getItem("apollo-user"));

    return {
        user,
        apolloUser,
    };
}
const getuserByEmail = (email) => {
    return http.get(`users/?email=${email}`).then((response) => {
        const { data } = response;
        if (data) {
            return data;
        }
        throw new Error("Error");
    });
};

export default {
    login,
    logout,
    isAuth,
    signUp,
    signUpApollo,
    loginApollo,
    isAuthApollo,
    getUsersFromStorage,
    getuserByEmail,
    isAuthAdmin,
};
