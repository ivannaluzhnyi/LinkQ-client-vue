import propertyService from "../Services/property.service";

function getProperty({ commit }, searchInformation) {
    propertyService
        .getProperty(searchInformation)
        .then((response) => {
            commit("setProperty", response);
        })
        .catch((error) => {
            console.log('error :>> ', error);
        });
}


export const actions = { getProperty };
