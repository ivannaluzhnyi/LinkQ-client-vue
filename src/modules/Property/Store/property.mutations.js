export const mutations = {
    ['setProperty'](state, properties) {
        console.log('mutation properties :>> ', properties);
        state.properties = properties
    }
};
