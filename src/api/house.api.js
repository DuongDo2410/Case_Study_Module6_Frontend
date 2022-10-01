import { axiosConfig } from "./axios";

const houseApi = {
  getAll() {
    const url = `/homes`;
    return axiosConfig.get(url);
  },
  create(house) {
    const url = `/homes`;
    return axiosConfig.post(url, house);
  },
};
export default houseApi;
