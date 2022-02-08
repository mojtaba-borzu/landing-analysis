import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import loginReducer from "./slice/loginSlice";
import rigesterReducer from "./slice/rigesterSlice";
import forgetPasswordReducer from "./slice/forgetPasswordSlice";

import commonReducer from "./slice/commonSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      login: loginReducer,
      rigester: rigesterReducer,
      forgetPassword: forgetPasswordReducer,

      common: commonReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
