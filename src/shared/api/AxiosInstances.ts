import axios from "axios";

export const axiosBackInstance = axios.create({
  baseURL: "http://localhost:8080",
});
