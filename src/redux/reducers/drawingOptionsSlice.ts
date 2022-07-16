import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DrawingOptionsState {
  pickedColor: string;
}

const initialState: DrawingOptionsState = {
  pickedColor: "rgba(0, 0, 0, 1)",
};

export const drawingOptionsSlice = createSlice({
  name: "drawingOptions",
  initialState,
  reducers: {
    setPickedColor: (state, action: PayloadAction<string>) => {
      state.pickedColor = action.payload;
    },
  },
});

export const { setPickedColor } = drawingOptionsSlice.actions;

export default drawingOptionsSlice.reducer;
