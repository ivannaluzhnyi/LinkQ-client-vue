import httpClient from "@/core/utils/http-client";

/***
 * @param {String} searchInformation
 */
const getProperty = (searchInformation) => {
    const client = httpClient();
    console.log('searchInformation IN SERVICE:>> ', searchInformation);
    return client
        .get(`http://localhost:8080/features?${searchInformation}`)
        .then((response) => {
            const { data } = response;

            if (data) {
                console.log('RESPONSE GET IN SERVICE :>> ', data);
                return data
            }


            throw new Error("Token missing");
        });
}

export default { getProperty };