import { http } from "@/core/http";

export default {
    namespaced: true,
    state: {
        usersClient: {}
    },
    getters: {
        usersClient: (state) => {
            return state.usersClient;
        },
    },
    mutations: {
        setUsersClient(state, usersClient)
        {
            state.usersClient = usersClient;
        }
    },
    actions: {
        loadUsersClient({commit})
        {
            return http
                .get(`users?groups%5B%5D=user_get_full`)
                .then((response) => {
                    commit('setUsersClient', response.data);
                }).catch((error) => {
                    console.log(error);
                });
        }
    }
};
