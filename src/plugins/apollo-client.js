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

const wsLink = new WebSocketLink({
    uri: config.wsUsi,
    options: {
        reconnect: true,
        connectionParams: {
            Authorization: (() => {
                const token = localStorage.getItem("apollo-token");
                return token ? `Bearer ${token}` : null;
            })(),
        },
    },
});

const middlewareLink = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem("apollo-token");
    const nextToken = token ? `Bearer ${token}` : null;
    operation.setContext({
        headers: {
            Authorization: nextToken,
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
