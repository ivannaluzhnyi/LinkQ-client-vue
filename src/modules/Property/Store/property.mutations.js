export const mutations = {
    ['setProperties'](state, properties) {
        state.properties = properties
    },
    ['setProperty'](state, property){
        state.property = property;
    },
    ['setPropertiesUser'](state, property){
        state.propertiesUser = property;
    }
};
