export const getters = {
    isAuthenticated: (state) => {
        return state.loggedIn;
    },
    isAuthenticatedGraphql: (state) => {
        return state.graphql.loggedIn;
    },
};
