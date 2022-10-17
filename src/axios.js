import axios from "axios";
import { API } from "./helpers/API";

const instance = axios.create({
  // withCredentials: true,
  baseURL: API,
  //   timeout: 10000,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
});

instance.interceptors.request.use((config) => {
  // config.headers['key'] = 'value'
  console.log(config);
  return config;
});

instance.interceptors.response.use((config) => {
  return config;
});

export default instance;
