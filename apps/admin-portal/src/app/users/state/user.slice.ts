import { getAuthState } from '@monorepo-demo/auth';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { UserEntity, UsersListResponse } from './user.model';
import { callUserDetails, callUsers } from './user.service';

export const USER_FEATURE_KEY = 'user';

/*
 * Update these interfaces according to your requirements.
 */

export interface UserState extends EntityState<UserEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | undefined | null;
  usersResponse: UsersListResponse | null;
}


export const userAdapter = createEntityAdapter<UserEntity>();

export const fetchUser = createAsyncThunk(
  'user/usersList',
  async (page: number) => {
    try {
      const response: any = await callUsers(page);
      console.log('user response--', response);
      return { ...response.data };
    } catch (err: any) {
      console.log(err);
      throw new Error(err.message);
    }
  }
);


export const initialUserState: UserState = userAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null,
  usersResponse: null,
});

export const userSlice = createSlice({
  name: USER_FEATURE_KEY,
  initialState: initialUserState,
  reducers: {
    logout: (state) => {
      //console
    },
    resetLoadingState: (state) => {
      console.log('called resetloading sate');
      state.loadingStatus = 'not loaded';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state: UserState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchUser.fulfilled,
        (state: UserState, action: PayloadAction<UsersListResponse>) => {
          userAdapter.setAll(state, action.payload.data);
          state.loadingStatus = 'loaded';
          state.usersResponse = action.payload;
        }
      )
      .addCase(fetchUser.rejected, (state: UserState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;

const { selectAll, selectEntities } = userAdapter.getSelectors();
export const getUserState = (rootState: any): UserState =>
  rootState[USER_FEATURE_KEY];

export const selectAllUser = createSelector(getUserState, selectAll);
export const selectUserEntities = createSelector(getUserState, selectEntities);

export const getUserListStatus = (state: any) => {
  console.log(getUserState);
  console.log(state);
  return state?.user?.loadingStatus;
};

export const getTotalUsersCount = (state:any) => {
  return state?.user?.usersResponse?.total_pages;
}

// export const getPostStatus = (state: any) => state.posts.status;
//export const selectAllUser = (state: any) => state?.loginResponse?.data;
