import { http } from "@/core/http";

export default {
    namespaced: true,
    state: {
        property: {}
    },
    getters: {
        property: (state) => {
            return state.property;
        },
    },
    mutations: {
        setProperty(state, property)
        {
            state.property = property;
        }
    },
    actions: {
        loadProperty({commit},idProperty)
        {
            return http
                .get(`properties/${idProperty}`)
                .then((response) => {
                    console.log(response.data);
                    commit('setProperty', response.data);
                }).catch((error) => {
                    console.log(error);
                });
        }
    }
};