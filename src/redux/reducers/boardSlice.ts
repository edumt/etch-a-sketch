import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Pixel {
  color: string;
}

export interface BoardState {
  pixels: Pixel[];
}

export interface ISetPixelColorByIndexPayload {
  index: number;
  color: string;
}

const initialState: BoardState = {
  pixels: Array(16 ** 2).fill({ color: "#FFF" }),
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    initializePixels: (state, action: PayloadAction<number>) => {
      state.pixels = Array(action.payload ** 2).fill({ color: "#FFF" });
      console.log(state.pixels);
    },
    setPixelColorByIndex: (
      state,
      action: PayloadAction<ISetPixelColorByIndexPayload>,
    ) => {
      const { color, index } = action.payload;
      if (state.pixels[index]) state.pixels[index]!.color = color;
    },
  },
});

export const { initializePixels, setPixelColorByIndex } = boardSlice.actions;

export default boardSlice.reducer;
