import { axiosConfig } from "./axios";

const authapi = {
  register(user) {
    const url = `/auth/register`;
    return axiosConfig.post(url, user);
  },
};
export default authapi;
