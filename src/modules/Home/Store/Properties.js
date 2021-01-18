import httpClient from "@/core/utils/http-client";

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
            const client = httpClient();
            return client
                .get(`properties`)
                .then((response) => {
                    console.log(response.data);
                    commit('setProperties', response.data);
                }).catch((error) => {
                    console.log(error);
                });
        }
    }
};
