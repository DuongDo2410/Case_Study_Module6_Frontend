import { axiosConfig } from "./axios";

const userApi = {
  getUserByIb(token) {
    const url = `/auth/profile`;
    return axiosConfig.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  update(id, user) {
    const url = `/auth/updateProfile/${id}`;
    return axiosConfig.put(url, user);
  },
};
export default userApi;
