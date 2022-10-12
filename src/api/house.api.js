import { axiosConfig } from "./axios";

const houseApi = {
  getAll(page) {
    const url = `/homes/${page}`;
    return axiosConfig.get(url);
  },
  getTop5() {
    const url = `/top`;
    return axiosConfig.get(url);
  },
  getOne(id) {
    const url = `/homes/${id}`;
    return axiosConfig.get(url);
  },
  create(house) {
    const url = `/homes`;
    return axiosConfig.post(url, house);
  },
  getHistory() {
    const url = `/booking/history-renter`;
    return axiosConfig.get(url);
  },
  search(values) {
    const url = `/homes/find`;
    return axiosConfig.post(url, values)
  },
};
export default houseApi;
