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

    getUser: (state) => state.user,
    getUserEmail: (state) => state.user.username,

    "apollo/getUserId": (state) => state.apollo.user.id,
};
