import { actions } from "./property.actions";
import { mutations } from "./property.mutations";
import { getters } from "./property.getters";

const initialState = {
    properties: {},
    property: {},
    propertiesUser: {},

};

export default {
    namespaced: true,
    state: initialState,
    actions,
    mutations,
    getters,
};
