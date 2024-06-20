import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://${import.meta.env.VITE_SERVER_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
