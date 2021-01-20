import { apolloClient } from "@/plugins/apollo-client";
import { GET_APPLICATIONS } from "@/graphql/queries";

function getAllApplication() {
    return apolloClient.query({})
      
}

export default {
    getApplication,
};
