import { configureStore } from "@reduxjs/toolkit";
import usersStore from "./userStore";

export const store = configureStore({
  reducer: {
    users: usersStore,
  },
});
