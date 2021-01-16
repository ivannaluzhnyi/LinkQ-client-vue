import httpClient from "@/core/utils/http-client";

/***
 * @param {String} searchInformation
 */
const getProperty = (searchInformation) => {
    const client = httpClient();
    return client
        .get(`http://localhost:8080/features?${searchInformation}`)
        .then((response) => {
            const { data } = response;
            if (data) {
                return data;
            }
            throw new Error("Token missing");
        });
};

export default { getProperty };
