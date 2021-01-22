import { http } from "@/core/http";
/***
 * @param {String} searchInformation
 */
const getProperty = (searchInformation) => {

    return http
        .get(`features?${searchInformation}`)
        .then((response) => {
            const { data } = response;
            if (data) {
                return data;
            }
            throw new Error("Error");
        });
};

const loadProperty = (idProperty) => {
    return http
        .get(`properties/${idProperty}`)
        .then((response) => {

            const { data } = response;
            if (data) {
                return data;
            }
            throw new Error("Error");
        })
}
export default { getProperty, loadProperty };
