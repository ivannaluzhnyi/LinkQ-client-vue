export const getters = {
    isAuthenticated: (state) => {
        return state.loggedIn;
    },
    isAuthenticatedApollo: (state) => {
        return state.apollo.loggedIn;
    },
    isFullAuth: (state) => {
        return Boolean(state.apollo.loggedIn && state.loggedIn);
    },
    isLoading: (state) => state.loading,
    getMessage: (state) => state.message,

    getUser: (state) => state.user,
    getUserEmail: (state) => state.user.username,

    apollo_getUserId: (state) => state.apollo.user.id,
};
