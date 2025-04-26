import axios from "axios";

const baseAPI = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  timeout: 7000,
  headers: {
    "Content-Type": "application/json"
  }
})

export default baseAPI;