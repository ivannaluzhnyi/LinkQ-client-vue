import { actions } from "./auth.actions";
import { mutations } from "./auth.mutations";
import { getters } from "./auth.getters";

import authService from "../Services/auth.service";

const user = authService.isAuth();

const initialState = {
    user: user,
    loggedIn: !!user,

    graphql: {
        user: null,
        loggedIn: false,
    },

    loading: false,
};

export default {
    namespaced: true,
    state: initialState,
    actions,
    mutations,
    getters,
};
