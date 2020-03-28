import { API_ENDPOINT } from "../configs/app";
import axios from "axios";

export function saveData(data) {
  axios
    .post(API_ENDPOINT, data)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
}
