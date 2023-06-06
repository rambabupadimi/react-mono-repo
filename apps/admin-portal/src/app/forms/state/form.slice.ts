import { snackbarClasses } from '@mui/material';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { UserForm } from './form.model';
import { callUserDetails } from './form.service';

export const FORM_FEATURE_KEY = 'form';


export const fetchUserFormDetails = createAsyncThunk(
  'form/fetchStatus',
  async () => {
    try {
      const response: any = await callUserDetails();
      console.log('user response--', response);
      return { ...response };
    } catch (err: any) {
      console.log(err);
      throw new Error(err.message);
    }
  }
);

export interface FormState {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string ;
  data: UserForm | undefined
}


export const initialFormState: FormState = {
  loadingStatus: 'not loaded',
  error: '',
  data: undefined
};

export const formSlice = createSlice({
  name: FORM_FEATURE_KEY,
  initialState: initialFormState,
  reducers: {
    updateUserDetailsInLocal :(state,action) => {
      state.data = action.payload;
      
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserFormDetails.pending, (state: FormState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchUserFormDetails.fulfilled,
        (state: FormState, action: PayloadAction<UserForm>) => {
          state.loadingStatus = 'loaded';
          state.data = action.payload;
        }
      )
      .addCase(fetchUserFormDetails.rejected, (state: FormState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message as string;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const formReducer = formSlice.reducer;
export const formActions = formSlice.actions;


export const getFormState = (rootState:any): FormState =>
  rootState[FORM_FEATURE_KEY];

  export const getUserFromDetails = (state: any) => {
    console.log(state);
    return state?.formUser.data;
  };
  