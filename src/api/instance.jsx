import axios from "axios";

export const apis = {
  register: '/auth/register',
  login: '/auth/login',
  currentUser: '/users/',
  users: '/users',
  updateUser: '/users/update-role/',
  analyze: '/analyze',
  query: '/query',
  fir: '/generate/fir',
  uploadLaw: '/upload/laws',
  laws: '/laws',
  getLawById: '/laws/',
  updateLaw: '/laws/update/',
  downloadLaw: '/laws/download/',
  DeleteLaw: '/laws/delete/',
  SearchLaw: '/laws/search/',
  chatAdd: '/chat-history/add',
  chatUpdate: '/chat-history/update/',
  chatGet: '/chat-history/get',
  chatGetById: '/chat-history/get/',
  chatDelete: '/chat-history/delete/',
}

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // Your FastAPI server URL
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
