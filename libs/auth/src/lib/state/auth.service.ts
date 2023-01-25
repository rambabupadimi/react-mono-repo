import axios from "axios";

const LOGIN_URL = 'http://restapi.adequateshop.com/api/authaccount/login';


export function callLogin(loginRequest: any) {
  return axios.post(LOGIN_URL, loginRequest);
}
