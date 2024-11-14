import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { api } from './api';
import { User } from '../../interfaces/api-interface';

const initialState: User = {
  id: 0,
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: '',
      lng: '',
    },
  },
  phone: '',
  website: '',
  company: {
    name: '',
    catchPhrase: '',
    bs: '',
  },
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getUser.matchFulfilled,
      (state, { payload }) => {
        Object.assign(state, payload);
      },
    );
  },
});

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth;
