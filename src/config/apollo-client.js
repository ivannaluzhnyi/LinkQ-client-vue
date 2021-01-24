const config = {
    serverUri: process.env.APP_VUE_GQL || "http://localhost:4000/",
    wsUsi: process.env.APP_VUE_GQLWS || "ws://localhost:4000",
};

export default config;
