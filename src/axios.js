import axios from 'axios'
import {baseUrl, apiToken} from './config/assets'

const instance = axios.create({
    baseURL:baseUrl,
    headers: {
        Accept: "application/json",
        Authorization:  `Bearer ${apiToken}`
    }
});

export default instance