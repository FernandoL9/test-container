import axios from "axios";

export const api = axios.create({
 // baseURL: "https://rocketseat-api-notes.onrender.com"
  baseURL: "http://localhost:3333"
  // baseURL: "http://192.168.100.212/api-rocketnotes"
});