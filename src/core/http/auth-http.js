import httpClient from "../utils/http-client";

const token = localStorage.getItem("token");
export default httpClient({
    headers: {
        Authorization: token,
    },
});
