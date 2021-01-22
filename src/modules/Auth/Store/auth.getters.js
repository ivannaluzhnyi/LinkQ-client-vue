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
    getUserEmail: (state) => state.user.username,

    apollo_getUserId: (state) => state.apollo.user.id,

    isAdmin: (state) => state.user.roles.includes(USER_ROLES.ROLE_ADMIN),
};
