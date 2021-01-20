import { actions } from "./auth.actions";
import { mutations } from "./auth.mutations";
import { getters } from "./auth.getters";

import authService from "../Services/auth.service";

const user = authService.isAuth();

const initialState = {
    user: user,
    loggedIn: !!user,

    apollo: {
        user: null,
        loggedIn: authService.isAuthApollo(),
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
