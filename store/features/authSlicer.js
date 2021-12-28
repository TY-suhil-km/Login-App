import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "token",
  initialState: {
    value: "",
  },
  reducers: {
    updateToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateToken } = authSlice.actions;

export default authSlice.reducer;
