import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slices/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
