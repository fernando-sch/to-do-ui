import axios from "axios";
import { envObject } from "@/config";

export const axiosInstance = axios.create({
  baseURL: envObject.apiBaseUrl,
});
