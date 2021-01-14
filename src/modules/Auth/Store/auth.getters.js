export const getters = {
    IsAuthenticated: (state) => state.loggedIn,
    IsAuthenticatedGraphql: (state) => state.graphql.loggedIn,
};
