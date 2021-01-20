export const getters = {
    isAuthenticated: (state) => {
        return state.loggedIn;
    },
    isAuthenticatedGraphql: (state) => {
        return state.graphql.loggedIn;
    },
    isLoading: (state) => state.loading,
    getMessage: (state) => state.message
};
