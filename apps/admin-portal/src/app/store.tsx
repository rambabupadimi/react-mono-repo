import { authReducer } from "@monorepo-demo/auth";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { addUserReducer, editUserReducer } from "./users/state/add-user.slice";
import { deleteUserReducer } from "./users/state/delete-user.slice";
import { userDetailsReducer } from "./users/state/user-details.slice";
import { userReducer } from "./users/state/user.slice";


const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  userDetails: userDetailsReducer,
  addUser: addUserReducer,
  editUser: editUserReducer,
  deleteUser: deleteUserReducer
})

export const store = configureStore(
  {
    reducer: rootReducer

  }
)
