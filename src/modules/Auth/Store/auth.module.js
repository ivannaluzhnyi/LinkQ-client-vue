import { actions } from "./auth.actions";
import { mutations } from "./auth.mutations";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: user,
    loggedIn: !!user,
};

const auth = {
    namespaced: true,
    state: initialState,
    actions,
    mutations,
};

export default auth;
