import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { AddUserItem, EditUserItem } from './user.model';
import { callAddUser, callEditUser } from './user.service';

export const ADD_USER_FEATURE_KEY = 'addUser';
export const EDIT_USER_FEATURE_KEY = 'editUser';


export interface AddUserState  {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null | undefined;
  isDialogShow: boolean;
}


export interface EditUserState  {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null | undefined;
  isDialogShow: boolean;
}


export const fetchAddUser = createAsyncThunk(
  'addUser/fetchAddUser',
  async (user: AddUserItem) => {
    try {
      const response: any = await callAddUser(user);
      console.log('add user response--', response);
      return { ...response.data };
    } catch (err: any) {
      console.log(err);
      throw new Error(err.message);
    }
  }
);


export const fetchEditUser = createAsyncThunk(
  'editUser/fetchEditUser',
  async (user: EditUserItem) => {
    try {
      const response: any = await callEditUser(user);
      console.log('edit user response--', response);
      return { ...response.data };
    } catch (err: any) {
      console.log(err);
      throw new Error(err.message);
    }
  }
);


export const initialAddUserState: AddUserState =
  {
    loadingStatus: 'not loaded',
    error: null,
    isDialogShow: false
  }

export const initialEditUserState: EditUserState =
{
  loadingStatus: 'not loaded',
  error: null,
  isDialogShow: false
}


export const addUserSlice = createSlice({
  name: ADD_USER_FEATURE_KEY,
  initialState: initialAddUserState,
  reducers: {
    openAddUserDialog: (state) => {
      state.isDialogShow = true;
    },
    closeAddUserDialog: (state) => {
      state.isDialogShow = false;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddUser.pending, (state: AddUserState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchAddUser.fulfilled,
        (state: AddUserState, action: any) => {
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchAddUser.rejected, (state: AddUserState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

export const editUserSlice = createSlice({
  name: EDIT_USER_FEATURE_KEY,
  initialState: initialEditUserState,
  reducers: {
    openEditUserDialog: (state) => {
      state.isDialogShow = true;
    },
    closeEditUserDialog: (state) => {
      state.isDialogShow = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddUser.pending, (state: EditUserState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchAddUser.fulfilled,
        (state: EditUserState, action: any) => {
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchAddUser.rejected, (state: EditUserState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});


export const addUserReducer = addUserSlice.reducer;
export const addUserActions = addUserSlice.actions;

export const editUserReducer = editUserSlice.reducer;
export const editUserActions = editUserSlice.actions;

export const getAddUserState = (rootState: any): AddUserState =>
  rootState[ADD_USER_FEATURE_KEY];

export const getEditUserState = (rootState: any): EditUserState =>
  rootState[ADD_USER_FEATURE_KEY];

export const addUserDialogDisplayStatus = (state: any) => {
  console.log(state);
  return state.addUser.isDialogShow;
}
export const editUserDialogDisplayStatus = (state: any) => {
  console.log(state);
  return state.editUser.isDialogShow;
}

export const addUserAPICallStatus = (state: any) => {
  return state.addUser.loadingStatus;
}

