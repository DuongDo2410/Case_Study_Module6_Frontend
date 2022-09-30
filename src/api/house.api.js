import { axiosConfig } from "./axios";

const houseApi = {
  create(house) {
    const url = `/homes`;
    return axiosConfig.post(url, house);
  },
};
export default houseApi;
