import { axiosConfig } from "./axios";

const userApi = {
  getUserById(token) {
    const url = `/user/profile`;
    return axiosConfig.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  update(user) {
    const url = `/user/updateProfile`;
    return axiosConfig.put(url, user);
  },
  changePassword(payload, token) {
    const url = `/user/changePassword`;
    return axiosConfig.post(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  login(user) {
    const url = `/auth/login`;
    return axiosConfig.post(url, user);
  },
  loginGoogle(user) {
    console.log('login gg', user);
    const url = `/auth/loginGoogle`;
    return axiosConfig.post(url, user);
  },

};
export default userApi;
