import httpClient from "@/core/utils/http-client";
const client = httpClient();
/***
 * @param {String} searchInformation
 */
const getProperty = (searchInformation) => {

    return client
        .get(`http://localhost:8080/features?${searchInformation}`)
        .then((response) => {
            const { data } = response;
            if (data) {
                return data;
            }
            throw new Error("Error");
        });
};

const loadProperty = (idProperty) => {
    return client
        .get(`http://localhost:8080/properties/${idProperty}`)
        .then((response) => {

            const { data } = response;
            if (data) {
                return data;
            }
            throw new Error("Error");
        })
}
export default { getProperty, loadProperty };
