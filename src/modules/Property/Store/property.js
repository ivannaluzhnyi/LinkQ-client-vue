import httpClient from "@/core/utils/http-client";

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
        loadProperty({commit}, idProperty)
        {
            const client = httpClient();
            return client
                .get("properties", {idProperty})
                .then((response) => {
                    console.log(response);
                    commit('setProperty', response);
                }).catch(error => {
                    throw new Error(`API ${error}`);
                });
        }
    }
}