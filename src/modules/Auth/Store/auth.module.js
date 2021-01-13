const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: user,
    loggedIn: !!user,
};

const auth = {
    namespaced: true,
    state: initialState,
};

export default auth;
