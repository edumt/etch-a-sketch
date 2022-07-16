import { configureStore } from "@reduxjs/toolkit";
import drawingOptionsSlice from "./reducers/drawingOptionsSlice";

export const store = configureStore({
  reducer: {
    drawingOptions: drawingOptionsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
