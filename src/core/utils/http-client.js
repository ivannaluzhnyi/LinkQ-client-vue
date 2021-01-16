import axios from "axios";

/**
 * HTTP Client
 */
export class HttpClient {
    static requestInterceptors = [];
    static responseInterceptors = [];

    defaultRequestInterceptors = [
        {
            fulfilled: (config) => {
                const { data, method, url } = config;
                console.log(`Request: ${method.toUpperCase()} | /${url}`, data);

                // if (config.auth) {
                //     const token = JSON.parse(localStorage.getItem("token"));
                //     defaultConfig.headers.Authorization = `${token}`;
                // }

                return config;
            },
            rejected: (error) => Promise.reject(error),
        },
    ];
    defaultResponseInterceptors = [
        {
            fulfilled: (response) => {
                // console.log("response => ", response);
                const {
                    config: { method, url },
                    data,
                } = response;
                console.log(
                    `Response: ${method.toUpperCase()} | /${url}`,
                    data
                );
                return response;
            },
            rejected: (error) => Promise.reject(error),
        },
    ];

    constructor(config) {
        this.client = axios.create({
            baseURL: config.baseURL,
            timeout: 10000,
            headers: config.headers,
        });

        [
            ...this.defaultRequestInterceptors,
            ...HttpClient.requestInterceptors,
        ].forEach((interceptor) => this.addRequestInterceptor(interceptor));

        [
            ...this.defaultResponseInterceptors,
            ...HttpClient.responseInterceptors,
        ].forEach((interceptor) => {
            this.addResponseInterceptor(interceptor);
        });
    }

    addRequestInterceptor = (interceptor) =>
        this.client.interceptors.request.use(
            interceptor.fulfilled,
            interceptor.rejected
        );

    addResponseInterceptor = (interceptor) =>
        this.client.interceptors.response.use(
            interceptor.fulfilled,
            interceptor.rejected
        );

    /**
     * Perform a GET request
     *
     * @example
     * // Will query ${baseUrl}/route
     * client.get('/route').then(...).catch(...)
     *
     * @example
     * const response = await client.get('/')
     *
     * @param {string} url Url of the request. Appended to baseUrl
     * @param {Object} [additionalHeaders={}] Additional headers to include in the request
     *
     * @returns {Promise<Object>}  A promise that fulfills with the response when the request is
     *  complete, or rejected with and error.
     */
    get(url, additionalHeaders = {}) {
        return this.client.get(url, { headers: additionalHeaders });
    }

    /**
     * Perform a POST request
     *
     * @example
     * client.post('/', { value: 'key' }).then(...).catch(...)
     *
     * @example
     * const response = await client.post('/', { value: 'key' })
     *
     * @param {string} url Url of the request. Appended to baseUrl
     * @param {Object} [data={}] Request body
     * @param {Object} [additionalHeaders={}] Additional headers to include in the request
     *
     * @returns {Promise<Object>}
     */
    post(url, data = {}, additionalHeaders = {}) {
        return this.client.post(url, data, { headers: additionalHeaders });
    }

    /**
     * Perform a PUT request
     *
     * @example
     * client.put('/', { value: 'key' }).then(...).catch(...)
     *
     * @example
     * const response = await client.put('/', { value: 'key' })
     *
     * @param {string} url Url of the request. Appended to baseUrl
     * @param {Object} [data={}] Request body
     * @param {Object} [additionalHeaders={}] Additional headers to include in the request
     *
     * @returns {Promise<Object>}
     */
    put(url, data = {}, additionalHeaders = {}) {
        return this.client.put(url, data, { headers: additionalHeaders });
    }

    /**
     * Perform a PATCH request
     *
     * @example
     * client.patch('/', { value: 'key' }).then(...).catch(...)
     *
     * @example
     * const response = await client.patch('/', { value: 'key' })
     *
     * @param {string} url Url of the request. Appended to baseUrl
     * @param {Object} [data={}] Request body
     * @param {Object} [additionalHeaders={}] Additional headers to include in the request
     *
     * @returns {Promise<Object>}
     */
    patch(url, data = {}, additionalHeaders = {}) {
        return this.client.patch(url, data, { headers: additionalHeaders });
    }

    /**
     * Perform a DELETE request
     *
     * @example
     * client.delete('/').then(...).catch(...)
     *
     * @example
     * const response = await client.delete('/')
     *
     * @param {string} url Url of the request. Appended to baseUrl
     * @param {Object} [additionalHeaders={}] Additional headers to include in the request
     *
     * @returns {Promise<Object>}
     */
    delete(url, additionalHeaders = {}) {
        return this.client.delete(url, { headers: additionalHeaders });
    }

    /**
     * @example
     * client.request(response.config).then(...).catch(...)
     *
     * @returns {Promise<Object>}
     */
    request(config) {
        return this.client.request(config);
    }
}

/**
 *
 * @param {Object} config
 * @param {string} config.baseUrl
 * @param {Object} config.headers
 *
 * @returns {Object}
 */
export default function httpClient(config = {}) {
    const defaultConfig = {
        //TODO: pass to ENV (docker-compose)
        baseURL: "http://localhost:8080/",
        headers: {
            Accept: "application/json",
        },
    };

    // if (config.auth) {
    //     const token = JSON.parse(localStorage.getItem("token"));
    //     defaultConfig.headers.Authorization = `${token}`;
    // }

    return new HttpClient({ ...defaultConfig, ...config });
}
