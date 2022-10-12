import { axiosConfig } from "./axios";

const houseApi = {
  getAll() {
    const url = `/homes`;
    return axiosConfig.get(url);
  },
  getTop5() {
    const url = `/top`;
    return axiosConfig.get(url);
  },
  getHouseByUser() {
    const url = `/homes/get-house-by-user`;
    return axiosConfig.get(url);
  },
  getHouseById(id) {
    const url = `/homes/detail/${id}`;
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
  update(props) {
    const url = `/homes/${props.id}`;
    return axiosConfig.put(url, props.house);
  },
  getHistory() {
    const url = `/booking/history-renter`;
    return axiosConfig.get(url);
  },
  search(values) {
    const url = `/homes/find`;
    return axiosConfig.post(url, values);
  },
  deleteHome(id) {
    const url = `/homes/${id}`;
    return axiosConfig.delete(url);
  },
};
export default houseApi;
