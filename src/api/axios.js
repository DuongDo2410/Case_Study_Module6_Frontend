import axios from "axios";

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzZiMDRlZDBmMmQyZDFjNGJjYWUwZSIsInVzZXJuYW1lIjoiZHV5IiwiaWF0IjoxNjY0NjA0MDcwLCJleHAiOjEzMTI2NDYwNDA3MH0.pAtoPWPWlraeywsUcISVb3z2h8h6LzBBMiQBruv9CBE"
export const axiosConfig = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + {token}
  },
});
