import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "X-Api-Key": import.meta.env.VITE_API_KEY,
  },
  params: {
    country: "in",
    pageSize: 10,
  },
});

export default axiosInstance;
