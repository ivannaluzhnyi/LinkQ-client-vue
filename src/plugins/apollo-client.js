import Vue from "vue";
import VueApollo from "vue-apollo";

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import config from "@/config/apollo-client";

const httpLink = createHttpLink({
    uri: config.uri,
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});

Vue.use(VueApollo);

export default new VueApollo({
    defaultClient: apolloClient,
});
