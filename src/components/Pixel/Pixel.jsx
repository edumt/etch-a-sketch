import { useState, useEffect } from "react";
import * as S from "./styled";

const Pixel = ({ size, color, isShowingGrid, gridColor, drawPixel }) => {
  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <S.Pixel
      size={size}
      color={color}
      onMouseOver={() => drawPixel(false)}
      onMouseDown={() => drawPixel(true)}
      onDragStart={preventDragHandler} // maybe use onDrag to draw too
      showingGrid={isShowingGrid}
      gridColor={gridColor}
    />
  );
};

export default Pixel;
