import { USER_ROLES } from "@/core/constants/enums";

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
    message_success: (state) => state.message_success,
    message_error: (state) => state.message_error,
    getUser: (state) => state.user,
    getUserEmail: (state) => (state.user ? state.user.username : ""),

    apollo_getUserId: (state) =>
        state.apollo.user ? state.apollo.user.id : undefined,
    apollo_getUser: (state) => state.apollo.user,

    isAdmin: (state) =>
        state.user ? state.user.roles.includes(USER_ROLES.ROLE_ADMIN) : false,
};
