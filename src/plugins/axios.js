import axios from "axios";
import {API_URL} from "../config/env";
import { Redirect } from 'react-router-dom';
import {LoginRoute} from "../constants/routes/routes";


const Axios = axios.create({
    baseURL: API_URL || 'http://localhost:3001',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        Authorization: `Bearer ${localStorage.getItem('_token') || null}`
    },
});

// Axios.interceptors.response.use(response => {
//     console.log(111)
//     return response;
// }, error => {
//     if (error.response.status === 401) {
//        // return <Redirect to={LoginRoute} />
//     }
//     return error;
// });

export default Axios;
