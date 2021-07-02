import axios from "axios";
import {API_URL} from "../config/env";


const Axios = axios.create({
    baseURL: API_URL || 'http://localhost:3001',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        Authorization: `Bearer ${localStorage.getItem('_token') || null}`
    }
});

export default Axios;
