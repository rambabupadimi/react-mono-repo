

import axios from "axios";
import { AddUserItem, EditUserItem, } from "./user.model";

const USERS = 'http://restapi.adequateshop.com/api/users?page=';
const USER_DETAILS = "http://restapi.adequateshop.com/api/users/";
const ADD_USER = "http://restapi.adequateshop.com/api/users/";


export function callUsers(page: number) {
  return axios.get(USERS+""+page);
}

export function callUserDetails(id: number) {
  return axios.get(USER_DETAILS+""+id);
}

export function callAddUser(userRequest: AddUserItem) {
  return axios.post(ADD_USER,userRequest);
}

export function callEditUser(userRequest: EditUserItem) {
  return axios.put(ADD_USER,userRequest);
}

export function callDeleteUser(id: number) {
  return axios.delete(ADD_USER+""+id);
}

