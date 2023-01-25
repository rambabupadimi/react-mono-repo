import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { LoginResponse } from './auth.models';
import { callLogin } from './auth.service';

export const AUTH_FEATURE_KEY = 'auth';

/*
 * Update these interfaces according to your requirements.
 */


// export interface AuthState extends EntityState<AuthEntity> {
//   loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
//   error: string | undefined;
// }

export interface AuthState {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null | undefined;
  loginResponse: LoginResponse | null;
}

// export const authAdapter = createEntityAdapter<AuthEntity>();

export const doLogin = createAsyncThunk(
  'auth/login',
  async (loginRequest: any) => {
    try {
      const response: any = await callLogin(loginRequest);
      console.log('action response--', response);
      return { ...response.data };
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
);

// export const initialAuthState: AuthState = authAdapter.getInitialState({
//   loadingStatus: 'not loaded',
//   error: null,
// });

export const initialAuthState: AuthState =  {
  loadingStatus: 'not loaded',
  error: null,
  loginResponse: null
}

export const authSlice = createSlice({
  name: AUTH_FEATURE_KEY,
  initialState: initialAuthState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(doLogin.pending, (state: AuthState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        doLogin.fulfilled,
        (state: AuthState, action: PayloadAction<any>) => {
          console.log(action)
          console.log(state);
          state.loginResponse = action.payload.data;
          state.loadingStatus = 'loaded';
          localStorage.setItem('token', action.payload.data.Token);
        }
      )
      .addCase(doLogin.rejected, (state: AuthState, action: any) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;

export const getAuthState = (rootState: any): AuthState =>
  rootState[AUTH_FEATURE_KEY];

export const getLoginStatus = (getAuthState: any) => {
  console.log(getAuthState)
  return getAuthState.auth.loadingStatus;
}

// export const selectAllAuth = createSelector(getAuthState, selectAll);

// export const selectAuthEntities = createSelector(getAuthState, selectEntities);
