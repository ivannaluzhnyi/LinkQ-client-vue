import { apolloClient } from "@/plugins/apollo-client";
import { CREATE_APPLICATION } from "@/graphql/mutations";

/**
 *
 * @param {number} offer
 * @param {string} property_id
 * @param {number} buyerId
 * @returns {Promise<Object>}
 */
function createApplication(offer, property_id, buyerId) {
    return apolloClient
        .mutate({
            mutation: CREATE_APPLICATION,
            variables: { offer, property_id: String(property_id), buyerId },
        })
        .then(async ({ data }) => {
            return data.createApplication;
        })
        .catch(async (error) => {
            console.error(error);
            return error;
        });
}

export default { createApplication };
