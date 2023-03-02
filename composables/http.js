import axios from "axios";
const config = useRuntimeConfig();
const http = axios.create({
  baseURL: config.public.API_BASE_URL,
});

export default http;