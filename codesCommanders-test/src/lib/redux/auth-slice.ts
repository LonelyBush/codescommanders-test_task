import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { api } from './api';
import { Auth } from '../../interfaces/api-interface';

const initialState: Auth = {
  user: null,
  isAuth: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      return { user: null, isAuth: false };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getUser.matchFulfilled,
      (state, { payload }: PayloadAction<Auth>) => {
        if (!payload) {
          return { user: null, isAuth: false };
        }
        state.user = payload.user;
        state.isAuth = payload.isAuth;
      },
    );
  },
});

export default slice.reducer;
export const { logout } = slice.actions;

export const selectCurrentUser = (state: RootState) => state.auth;
