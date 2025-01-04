import ax from "axios";
import { API_BASE_URL } from "../constant/config";

const axios = ax.create({
  baseURL: API_BASE_URL,
});
export default axios;
