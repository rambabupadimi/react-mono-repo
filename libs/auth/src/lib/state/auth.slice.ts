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

export interface AuthState {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null | undefined;
  loginResponse: LoginResponse | null;
}

export const initialAuthState: AuthState =  {
  loadingStatus: 'not loaded',
  error: null,
  loginResponse: null
}

export const authSlice = createSlice({
  name: AUTH_FEATURE_KEY,
  initialState: initialAuthState,
  reducers: {
    loginDestroy(state) {
      state.error = null;
      state.loadingStatus = 'not loaded';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(doLogin.pending, (state: AuthState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        doLogin.fulfilled,
        (state: AuthState, action: PayloadAction<any>) => {
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

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;

export const getAuthState = (rootState: any): AuthState =>
  rootState[AUTH_FEATURE_KEY];

export const getLoginStatus = (getAuthState: any) => {
  console.log(getAuthState)
  return getAuthState.auth.loadingStatus;
}

export const getError = (getAuthState:any) => {
  return getAuthState.auth.error;
}

// middleware async tunk
export const doLogin = createAsyncThunk(
  'auth/login',
  async (loginRequest: any) => {
    try {
      const response: any = await callLogin(loginRequest);
      console.log('action response--', response);
      if(response.data.data) {
        return { ...response.data };
      } else {
        throw new Error(response.data.message);
      }
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
);