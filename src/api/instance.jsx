import axios from "axios";

export const apis = {
  register:'/auth/register',
  login:'/auth/login',
  analyze:'/analyze',
  query:'/query',
  fir:'/generate/fir',
  laws:'/upload/laws',
}

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // Your FastAPI server URL
  headers: { "Content-Type": "application/json" },
});

export default api;
