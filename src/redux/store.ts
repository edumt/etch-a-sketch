import { configureStore } from "@reduxjs/toolkit";
import boardOptionsSlice from "./reducers/boardOptionsSlice";
import drawingOptionsSlice from "./reducers/drawingOptionsSlice";

export const store = configureStore({
  reducer: {
    drawingOptions: drawingOptionsSlice,
    boardOptions: boardOptionsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
