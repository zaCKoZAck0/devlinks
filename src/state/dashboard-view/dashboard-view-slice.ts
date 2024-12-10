import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DashboardViewState {
  view: "profile" | "links";
}

const initialState: DashboardViewState = {
  view: "profile",
};

const dashboardViewSlice = createSlice({
  name: "dashboardView",
  initialState,
  reducers: {
    setDashboardView: (
      state: DashboardViewState,
      action: PayloadAction<DashboardViewState["view"]>,
    ) => {
      state.view = action.payload;
    },
  },
});

export const { setDashboardView } = dashboardViewSlice.actions;

export default dashboardViewSlice.reducer;
