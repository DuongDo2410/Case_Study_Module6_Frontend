import { axiosConfig } from "./axios";

const houseApi = {
  getAll() {
    const url = `/homes`;
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
  ratingHouse({id,rating}) {
    const url = `/rating`;
    return axiosConfig.post(url, {id: id, rating: rating})
  },
  updateComment({id,comment}) {
    const url = `/homes/comments/${id}`;
    return axiosConfig.post(url, {comment})
  },
};
export default houseApi;
