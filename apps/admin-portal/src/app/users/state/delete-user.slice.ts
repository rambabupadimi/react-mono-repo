import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { callDeleteUser } from './user.service';

export const DELETE_USER_FEATURE_KEY = 'deleteUser';

export interface DeleteUserState{
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null | undefined;
  isDialogShow: boolean;
}

export const fetchDeleteUser = createAsyncThunk(
  'deleteUser/fetchStatus',
  async (id: number) => {
    try {
      const response: any = await callDeleteUser(id);
      console.log('delete user response--', response);
      return { ...response.data };
    } catch (err: any) {
      console.log(err);
      throw new Error(err.message);
    }
  }
);

export const initialDeleteUserState: DeleteUserState =
 {
    loadingStatus: 'not loaded',
    error: null,
    isDialogShow:false
}

export const deleteUserSlice = createSlice({
  name: DELETE_USER_FEATURE_KEY,
  initialState: initialDeleteUserState,
  reducers: {
    openDeleteUserDialog: (state) => {
      state.isDialogShow = true;
    },
    closeDeleteUserDialog: (state) => {
      state.isDialogShow = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeleteUser.pending, (state: DeleteUserState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchDeleteUser.fulfilled,
        (state: DeleteUserState, action: any) => {

          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchDeleteUser.rejected, (state: DeleteUserState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});


export const deleteUserReducer = deleteUserSlice.reducer;
export const deleteUserActions = deleteUserSlice.actions;

export const getDeleteUserState = (rootState: any): DeleteUserState =>
  rootState[DELETE_USER_FEATURE_KEY];

  export const deleteUserDialogDisplayStatus = (state: any) => {
    console.log(state);
    return state.deleteUser.isDialogShow;
  }
