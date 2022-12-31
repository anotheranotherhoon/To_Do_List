import axios, {AxiosRequestConfig} from 'axios';


const axiosConfig: AxiosRequestConfig<any> = {
  baseURL: process.env.REACT_APP_URL,
  timeout: 30000,
  headers : {
    'Content-Type': 'application/json',
  }
}


const axiosInstance = axios.create(axiosConfig)

export default axiosInstance;