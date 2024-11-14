import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import authStore from './auth-slice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authStore,
});

const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
      }).concat(api.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default setupStore;
