import { axiosInstance } from "../../authConfig";

const get = (url, { ...args }) => {
  return axiosInstance.get(url, { ...args });
};

const post = (url, reqObj, { ...args }) => {
  return axiosInstance.post(url, reqObj, { ...args });
};
const serviceUtil = { get, post };
export default serviceUtil;
