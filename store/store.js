import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlicer";

export default configureStore({
  reducer: {
    authToken: authReducer,
  },
});
