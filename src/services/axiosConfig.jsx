import axios from "axios";

// const baseURL = `http://10.10.21.234:9191/api/v1/`;  
const baseURL = `https://movie-search-back-end.vercel.app/`;

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
