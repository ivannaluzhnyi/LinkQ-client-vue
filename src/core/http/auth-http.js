import httpClient from "../utils/http-client";
import config from "@/config/http-client";

const token = localStorage.getItem("token");
export default httpClient({
    headers: {
        Authorization: token,
        Accept: "application/json",
    },
    baseUrl: config.baseUrl,
});
