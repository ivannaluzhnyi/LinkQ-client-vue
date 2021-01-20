import { actions } from "./auth.actions";
import { mutations } from "./auth.mutations";
import { getters } from "./auth.getters";

import authService from "../Services/auth.service";

const { user, apolloUser } = authService.getUsersFromStorage();

const initialState = {
    user: user,
    loggedIn: Boolean(user),

    apollo: {
        user: apolloUser,
        loggedIn: Boolean(apolloUser),
    },
    message:"",
    loading: false,
};

export default {
    namespaced: true,
    state: initialState,
    actions,
    mutations,
    getters,
};
