import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import dashboardViewReducer from "./dashboard-view/dashboard-view-slice";
import editorFormReducer from "./editor-form/editor-form-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dasboardView: dashboardViewReducer,
    editorForm: editorFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
