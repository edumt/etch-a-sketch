import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BoardOptionsState {
  gridResolution: number;
}

const initialState: BoardOptionsState = {
  gridResolution: 16,
};

export const boardOptionsSlice = createSlice({
  name: "boardOptions",
  initialState,
  reducers: {
    setGridResolution: (state, action: PayloadAction<number>) => {
      state.gridResolution = action.payload;
    },
  },
});

export const { setGridResolution } = boardOptionsSlice.actions;

export default boardOptionsSlice.reducer;
