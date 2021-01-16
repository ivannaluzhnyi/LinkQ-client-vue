import httpClient from "../utils/http-client";

import config from "@/config/http-client";

export default httpClient({ baseUrl: config.baseUrl });
