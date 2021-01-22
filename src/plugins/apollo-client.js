import Vue from "vue";
import VueApollo from "vue-apollo";

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink, split } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";

import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

import config from "@/config/apollo-client";

const httpLink = createHttpLink({
    uri: config.serverUri,
});

const token = localStorage.getItem("apollo-token");
const Authorization = token ? `Bearer ${token}` : null;

const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000`,
    options: {
        reconnect: true,
        connectionParams: {
            Authorization,
        },
    },
});

const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            Authorization,
        },
    });
    return forward(operation);
});

const terminatingLink = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === "OperationDefinition" && operation === "subscription";
    },
    wsLink,
    middlewareLink.concat(httpLink)
);

const link = ApolloLink.from([terminatingLink]);
const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
    link,
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
