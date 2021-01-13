import { actions } from "./auth.actions";
import { mutations } from "./auth.mutations";

import authService from "../Services/auth.service";

const user = authService.isAuth();

const initialState = {
    user: user,
    loggedIn: !!user,
};

export default {
    namespaced: true,
    state: initialState,
    actions,
    mutations,
};
