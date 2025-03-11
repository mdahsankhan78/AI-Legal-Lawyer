import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const apis = {
  register: '/auth/register',
  login: '/auth/login',
  currentUser: '/users/',
  analyze: '/analyze',
  query: '/query',
  fir: '/generate/fir',
  laws: '/upload/laws',
}

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // Your FastAPI server URL
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
