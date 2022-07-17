import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BoardState {
  pixels: { color: string }[];
  boardOptions: {
    gridResolution: number;
    isShowingGrid: boolean;
  };
  drawingOptions: {
    pickedColor: string;
  };
}

const initialState: BoardState = {
  pixels: Array(16 ** 2).fill({ color: "#FFF" }),
  boardOptions: { gridResolution: 16, isShowingGrid: false },
  drawingOptions: { pickedColor: "#000" },
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    initializePixels: (state, action: PayloadAction<number>) => {
      state.pixels = Array(action.payload ** 2).fill({ color: "#FFF" });
    },
    setPixelColorByIndex: (
      state,
      action: PayloadAction<{ index: number; color: string }>,
    ) => {
      const { color, index } = action.payload;
      if (state.pixels[index]) state.pixels[index]!.color = color;
    },
    setGridResolution: (state, action: PayloadAction<number>) => {
      state.boardOptions.gridResolution = action.payload;
    },
    toggleShowingGrid: (state) => {
      const { boardOptions } = state;
      boardOptions.isShowingGrid = !boardOptions.isShowingGrid;
    },
    setPickedColor: (state, action: PayloadAction<string>) => {
      state.drawingOptions.pickedColor = action.payload;
    },
  },
});

export const {
  initializePixels,
  setPixelColorByIndex,
  setGridResolution,
  toggleShowingGrid,
  setPickedColor,
} = boardSlice.actions;

export default boardSlice.reducer;
