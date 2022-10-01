import axios from "axios";

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzZiMDRlZDBmMmQyZDFjNGJjYWUwZSIsInVzZXJuYW1lIjoiZHV5IiwiaWF0IjoxNjY0NTI4NDc2LCJleHAiOjEzMTI2NDUyODQ3Nn0.GX00w7QL-Bk_aasXBIjQIJ5R6qzGgPtaLMTQq0xSisM"
export const axiosConfig = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + {token}
  },
});
