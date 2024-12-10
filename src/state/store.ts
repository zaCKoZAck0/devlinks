import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import dashboardViewReducer from "./dashboard-view/dashboard-view-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dasboardView: dashboardViewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
