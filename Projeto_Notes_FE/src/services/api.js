import axios from "axios";

export const api = axios.create({
  // baseURL: "https://rocketseat-api-notes.onrender.com"
  baseURL: "http://localhost:3333"
});