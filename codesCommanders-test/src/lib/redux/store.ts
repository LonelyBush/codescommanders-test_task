import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { typecodeApi } from './apiReducer';

const rootReducer = combineReducers({
  [typecodeApi.reducerPath]: typecodeApi.reducer,
});

const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
      }).concat(typecodeApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default setupStore;
