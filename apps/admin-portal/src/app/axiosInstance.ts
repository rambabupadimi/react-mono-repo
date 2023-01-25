import axios from "axios";
import { environment } from "../environments/environment";


const axiosInstance = axios.create({
  baseURL: environment.baseUrl
});


axiosInstance.interceptors.request.use((request:any) => {
  console.log(request);
  const token = localStorage.getItem('token');
  if (token) {
    request.headers.Authorization = 'Bearer '+token
  }
  console.log(request)
  return request;
});

export default axiosInstance;
