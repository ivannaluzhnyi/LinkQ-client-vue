import { apolloClient } from "@/plugins/apollo-client";

import { UPDATE_APPLICATION } from "@/graphql/mutations";

/**
 *
 * @param {string} applicationId
 * @param {'ACCEPTED'|'REFUSED'} status
 * @returns {Promise<any>}
 */
function changeStatusApplication(applicationId, status) {
    return apolloClient
        .mutate({
            mutation: UPDATE_APPLICATION,
            variables: {
                data: {
                    status: status,
                },
                where: {
                    id: applicationId,
                },
            },
        })
        .then(async ({ data }) => {
            console.log("dtaa ==> ", data);

            return data;
        });
}
export default {
    changeStatusApplication,
};
