import { apolloClient } from "@/plugins/apollo-client";
import { CREATE_APPLICATION } from "@/graphql/mutations";
import { GET_APPLICATION_BY_PROPERTY } from "@/graphql/queries";

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

/**
 *
 * @param {number} user_id
 * @param {number} property_id
 */
function checkIfExist(user_id, property_id) {
    return apolloClient
        .query({
            query: GET_APPLICATION_BY_PROPERTY,
            variables: { user_id, property_id: String(property_id) },
        })
        .then(({ data }) => data.applications.length !== 0)
        .catch(() => false);
}

export default { createApplication, checkIfExist };
