import axios from "axios";
import store from "./store/store";

const baseURL = "http://f68f-202-83-17-224.ngrok.io/";

const axiosInstance = axios.create({ baseURL });
axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    Authorization: store.getState().authToken.value,
    "content-type": "application/json",
    ...config.headers,
  };
  return config;
});
export { axiosInstance };
