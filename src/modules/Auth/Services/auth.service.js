/**
 *
 * @param {String} email
 * @param {String} password
 */
function login(email, password) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    };

    return fetch(`/users/authenticate`, requestOptions)
        .then((res) => res.json())
        .then((response) => {
            console.log(response);
            // login successful if there's a jwt token in the response
            // if (user.token) {
            //     // store user details and jwt token in local storage to keep user logged in between page refreshes
            //     localStorage.setItem("user", JSON.stringify(user));
            // }
            // return user;
        });
}

function logout() {
    //TODO remove from local storage
}

export { login, logout };
