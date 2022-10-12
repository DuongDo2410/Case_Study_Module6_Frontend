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
  changePassword(payload) {
    const url = `/user/changePassword`;
    return axiosConfig.post(url, payload)
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
  getStatistic() {
    const url = `/user/get-statistics`;
    return axiosConfig.get(url);
  },

};
export default userApi;
