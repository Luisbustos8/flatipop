import axios from "axios";

const config = {
  baseURL: process.env.REACT_APP_API_URL,
};

const client = axios.create(config);

export default client;
