import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
