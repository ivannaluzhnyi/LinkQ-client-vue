import config from "@/config/apollo-client";

module.exports = {
    client: {
        service: {
            name: "Lygeemo",
            url: config.url,
        },
        // Files processed by the extension
        includes: ["src/**/*.vue", "src/**/*.js"],
    },
};
