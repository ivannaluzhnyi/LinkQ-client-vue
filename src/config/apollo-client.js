const config = {
    serverUri: process.env.VUE_APP_GQL || "http://localhost:4000/",
    wsUsi: process.env.VUE_APP_GQLWS || "ws://localhost:4000",
};

export default config;
