import axios from 'axios';
require('dotenv').config();

const $authHost = axios.create({
   baseURL: "/",
});

const $host = axios.create({
   baseURL: "/",
});

export { $host, $authHost };
