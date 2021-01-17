import httpClient from "../utils/http-client";

import config from "@/config/http-client";

export default httpClient({ baseURL: config.baseURL });
