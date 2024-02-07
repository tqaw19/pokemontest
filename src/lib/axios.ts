import axios from "axios";

export const client = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {
    "Content-type": "application/json",
  },
});
