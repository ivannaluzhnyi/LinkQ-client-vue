import { actions } from "./application.actions";
import { mutations } from "./application.mutations";
import { getters } from "./application.getters";

const initialState = {
    actionLoading: false,
    responseType: "",
};

export default {
    namespaced: true,
    state: initialState,
    actions,
    mutations,
    getters,
};
