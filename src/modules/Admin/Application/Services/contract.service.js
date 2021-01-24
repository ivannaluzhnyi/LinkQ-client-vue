import { apolloClient } from "@/plugins/apollo-client";

import { CREATE_CONTRACT } from "@/graphql/mutations";

/**
 *
 * @param {string} price
 * @param {string} application_id
 * @returns {Promise<any>}
 */
function createContract(price, application_id) {
    return apolloClient
        .mutate({
            mutation: CREATE_CONTRACT,
            variables: {
                data: {
                    price,
                    application_id,
                },
            },
        })
        .then(async ({ data }) => {
            return data.updateApplication;
        });
}
export default {
    createContract,
};
