import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BoardOptionsState {
  gridResolution: number;
  isShowingGrid: boolean;
}

const initialState: BoardOptionsState = {
  gridResolution: 16,
  isShowingGrid: false,
};

export const boardOptionsSlice = createSlice({
  name: "boardOptions",
  initialState,
  reducers: {
    setGridResolution: (state, action: PayloadAction<number>) => {
      state.gridResolution = action.payload;
    },
    toggleShowingGrid: (state) => {
      state.isShowingGrid = !state.isShowingGrid;
    },
  },
});

export const { setGridResolution, toggleShowingGrid } =
  boardOptionsSlice.actions;

export default boardOptionsSlice.reducer;
