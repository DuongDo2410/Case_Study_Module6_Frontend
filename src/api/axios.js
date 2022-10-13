import axios from "axios";

let token = localStorage.getItem('accessToken');
export const axiosConfig = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ` + token,
  },
});
