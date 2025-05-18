
import axios from 'axios';

const axiosAuth = axios.create({
  baseURL: "http://localhost:5001/api"
});

axiosAuth.interceptors.request.use(config => {
  console.log("in interceptor")
  const token = decodeURIComponent(localStorage.getItem("token"));

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn("No token found in localStorage");
  }
  return config;
});

export default axiosAuth;
