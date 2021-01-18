import { http } from "@/core/http";

export default {
    namespaced: true,
    state: {
        properties: {}
    },
    getters: {
        properties: (state) => {
            return state.properties;
        },
    },
    mutations: {
        setProperties(state, properties)
        {
            state.properties = properties;
        }
    },
    actions: {
        loadProperties({commit})
        {
            return http
                .get(`properties?groups%5B%5D=property_get_full`)
                .then((response) => {
                    console.log(response.data);
                    commit('setProperties', response.data);
                }).catch((error) => {
                    console.log(error);
                });
        }
    }
};
