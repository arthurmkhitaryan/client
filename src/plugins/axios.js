import axios from "axios";
import { API_URL } from "../config/env";

const Axios = axios.create({
    baseURL: API_URL || 'http://localhost:3001',
});

export default Axios;