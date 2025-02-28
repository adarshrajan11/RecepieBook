import axios from "axios";

const httpClient = axios.create({
    baseURL: 'www.themealdb.com/api/json/v1/1/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});
export default httpClient;