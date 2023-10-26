import axios from "axios";

//export const API_BASE_URL = "http://localhost:5454"
//export const API_BASE_URL = "http://34.93.128.199:5454/:5454";
export const API_BASE_URL="shopluxe.infinityfreeapp.com";
const jwt = localStorage.getItem("jwt");

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${jwt}`,
    "Content-Type": "application/json",
  },
});
