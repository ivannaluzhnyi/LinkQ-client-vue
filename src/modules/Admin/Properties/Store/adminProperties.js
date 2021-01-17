import http from "@/core/utils/http-client";

export default {
    namespaced: true,
    state: {
        propertiesClient: {}
    },
    getters: {
        propertiesClient: (state) => {
            return state.propertiesClient;
        },
    },
    mutations: {
        setPropertiesClient(state, propertiesClient)
        {
            state.propertiesClient = propertiesClient;
        }
    },
    actions: {
        loadPropertiesClient({commit})
        {
            const client = http();
            return client
                .get(`properties`)
                .then((response) => {
                    console.log(response.data);
                    commit('setPropertiesClient', response.data);
                }).catch((error) => {
                    console.log(error);
                });
        }
    }
};
