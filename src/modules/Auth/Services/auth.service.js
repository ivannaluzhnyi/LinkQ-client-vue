import httpClient from "@/core/utils/http-client";
import { decodeToken } from "@/core/utils/jwt";

/**
 *
 * @param {String} email
 * @param {String} password
 */
function login(email, password) {
    const client = httpClient();

    return client
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

function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
}

/**
 * @returns {object|null}
 */
function isAuth() {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    return !!user && !!token ? user : null;
}

export default { login, logout, isAuth };
