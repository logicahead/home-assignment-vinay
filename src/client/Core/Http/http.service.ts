import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class HttpService {

    private config: AxiosRequestConfig;
    client: AxiosInstance;

    constructor() {
        this.config = {
            baseURL: process.env.REACT_APP_BASE_API_URL || 'http://localhost:3000',
        };
        
        this.client = axios.create(this.config);
    }


}

export default HttpService;
