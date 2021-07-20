import { configureStore } from "@reduxjs/toolkit";
import {
  templateReducer
} from "./slices";

export const store = configureStore({
  reducer: {
    template: templateReducer
  },
});
