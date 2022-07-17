import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialResolution = 16;

export interface BoardState {
  pixels: { color: string }[];
  boardSettings: {
    gridResolution: number;
    isShowingGrid: boolean;
  };
  drawingSettings: {
    pickedColor: string;
  };
}

const initialState: BoardState = {
  pixels: Array(initialResolution ** 2).fill({ color: "#FFF" }),
  boardSettings: { gridResolution: initialResolution, isShowingGrid: false },
  drawingSettings: { pickedColor: "#000" },
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
      state.boardSettings.gridResolution = action.payload;
    },
    toggleShowingGrid: (state) => {
      const { boardSettings } = state;
      boardSettings.isShowingGrid = !boardSettings.isShowingGrid;
    },
    setPickedColor: (state, action: PayloadAction<string>) => {
      state.drawingSettings.pickedColor = action.payload;
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
