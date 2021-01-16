import Vue from "vue";
import VueApollo from "vue-apollo";

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import config from "@/config/apollo-client";

const httpLink = createHttpLink({
    uri: config.serverUri,
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});

Vue.use(VueApollo);

export default new VueApollo({
    defaultClient: apolloClient,
    errorHandler(error) {
        console.log(
            "%cError",
            "background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",
            error.message
        );
    },
});
