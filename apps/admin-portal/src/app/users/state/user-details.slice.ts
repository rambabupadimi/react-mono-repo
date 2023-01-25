import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { UserEntity } from './user.model';
import { callUserDetails } from './user.service';

export const USER_DETAILS_FEATURE_KEY = 'userDetails';

/*
 * Update these interfaces according to your requirements.
 */

export interface UserDetailsState {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null | undefined;
  userDetails: UserEntity | null;
}


export const fetchUserDetails = createAsyncThunk(
  'user/userDetails',
  async (id: any) => {
    try {
      const response: any = await callUserDetails(id);
      console.log('user response--', response);
      return { ...response.data };
    } catch (err: any) {
      console.log(err);
      throw new Error(err.message);
    }
  }
);


export const initialUserDetailsState: UserDetailsState = {
  loadingStatus: 'not loaded',
  error: null,
  userDetails: null
  }

export const userDetailsSlice = createSlice({
  name: USER_DETAILS_FEATURE_KEY,
  initialState: initialUserDetailsState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state: UserDetailsState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchUserDetails.fulfilled,
        (
          state: UserDetailsState,
          action: any
        ) => {
          console.log(action.payload)
          state.loadingStatus = 'loaded';
          state.userDetails = action.payload;
        }
      )
      .addCase(fetchUserDetails.rejected, (state: UserDetailsState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const userDetailsReducer = userDetailsSlice.reducer;
export const userDetailsActions = userDetailsSlice.actions;

export const getUserDetailsState = (rootState: any): UserDetailsState =>
  rootState[USER_DETAILS_FEATURE_KEY];

export const getUserDetails = (state: any) => {
  console.log(state);
  return state.userDetails.userDetails;
}

export const getUserDetailsLoadingStatus = (state: any) => {
  return   state?.userDetails?.loadingStatus;
}
