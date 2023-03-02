import axios from "axios";
const api = axios.create({
  baseURL: 'http://grupo-drews.test/api/',
});

export default api;