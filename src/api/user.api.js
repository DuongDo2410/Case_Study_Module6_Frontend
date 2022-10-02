import { axiosConfig } from "./axios";

const userApi = {
    create(user) {
        const url = `/homes`;
        return axiosConfig.post(url, user);
    },
};
export default userApi;
