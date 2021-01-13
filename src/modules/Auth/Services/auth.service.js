import httpClient from "../../../core/utils/http-client";

/**
 *
 * @param {String} email
 * @param {String} password
 */
function login(email, password) {
    console.log("email, pass => ", email, password);
    const client = httpClient();

    console.log("client :> ", client);

    return client
        .post("authentication_token", { email, password })
        .then((data) => {
            console.log("data ==> ", data);
        });

    // return fetch(`/users/authenticate`, requestOptions)
    //     .then((res) => res.json())
    //     .then((response) => {
    //         console.log(response);
    //         // login successful if there's a jwt token in the response
    //         // if (user.token) {
    //         //     // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         //     localStorage.setItem("user", JSON.stringify(user));
    //         // }
    //         // return user;
    //     });
}

function logout() {
    //TODO remove from local storage
}

export default { login, logout };
