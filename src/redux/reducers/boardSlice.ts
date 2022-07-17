import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialResolution = 16;
const initialBgColor = "rgba(255, 255, 255, 1)";

export interface BoardState {
  pixels: { color: string }[];
  boardSettings: {
    gridResolution: number;
    isShowingGrid: boolean;
    size: number;
    backgroundColor: string;
  };
  drawingSettings: {
    pickedColor: string;
  };
}

const initialState: BoardState = {
  pixels: Array(initialResolution ** 2).fill({ color: initialBgColor }),
  boardSettings: {
    gridResolution: initialResolution,
    isShowingGrid: false,
    size: 600,
    backgroundColor: initialBgColor,
  },
  drawingSettings: { pickedColor: "rgba(0, 0, 0, 1)" },
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    // PIXELS
    initializePixels: (state, action: PayloadAction<number>) => {
      state.pixels = Array(action.payload ** 2).fill({ color: "#FFF" });
    },
    updatePixelColorByIndex: (
      state,
      action: PayloadAction<{ index: number; color: string }>,
    ) => {
      const { color, index } = action.payload;
      if (state.pixels[index]) state.pixels[index]!.color = color;
    },
    drawPixelByIndex: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index > state.pixels.length - 1 || index < 0)
        new Error("Pixel index out of bounds");
      const pixel = state.pixels[index]!;
      const { pickedColor } = state.drawingSettings;

      switch (pickedColor) {
        case "eraser":
          pixel.color = state.boardSettings.backgroundColor;
          break;
        case "rainbow":
          pixel.color = getRandomRGBA();
          break;
        case "tint":
          pixel.color = tintShade(pickedColor, 1);
          break;
        case "shade":
          pixel.color = tintShade(pickedColor, -1);
          break;
        default:
          pixel.color = pickedColor;
          break;
      }
    },
    // BOARD SETTINGS
    updateGridResolution: (state, action: PayloadAction<number>) => {
      state.boardSettings.gridResolution = action.payload;
    },
    toggleShowingGrid: (state) => {
      const { boardSettings } = state;
      boardSettings.isShowingGrid = !boardSettings.isShowingGrid;
    },
    updateBackgroundColor: (state, action: PayloadAction<string>) => {
      const color = action.payload;
      state.pixels.forEach((pixel) => {
        if (pixel.color === state.boardSettings.backgroundColor)
          pixel.color = color;
      });
      state.boardSettings.backgroundColor = color;
    },
    clearSketchPad: (state) => {
      state.pixels.forEach(
        (pixel) => (pixel.color = state.boardSettings.backgroundColor),
      );
    },
    // DRAWING SETTINGS
    updatePickedColor: (state, action: PayloadAction<string>) => {
      state.drawingSettings.pickedColor = action.payload;
    },
  },
});

export const {
  initializePixels,
  updatePixelColorByIndex,
  updateGridResolution,
  toggleShowingGrid,
  updateBackgroundColor,
  clearSketchPad,
  updatePickedColor,
  drawPixelByIndex,
} = boardSlice.actions;

export default boardSlice.reducer;

const getRandomRGB = () => Math.floor(Math.random() * 255);
const getRandomRGBA = () =>
  `rgba(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()}, 1)`;
const getRGBA = (color: string): number[] =>
  color
    .slice(5, -1) // removes 'rgba(' and ')'
    .split(",")
    .map((item) => Number(item.trim()));
const verifyLimit = (rgb: number): number => {
  if (rgb > 255) rgb = 255;
  else if (rgb < 0) rgb = 0;
  return rgb;
};
const tintShade = (color: string, potency: number) => {
  let [r, g, b] = getRGBA(color).map((item: number) =>
    verifyLimit(item + potency * 25),
  );

  return `rgba(${r}, ${g}, ${b}, 1)`;
};

// //const randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

// /*
//   todo: add grid line contrast
//   const getGridColor = ([r, g, b]) =>
//   r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#111" : "#EEE"; */

//     //let gridColor = getGridColor(getRGBA(color)); todo: add contrast toggle
//     let gridColor = "#898";
