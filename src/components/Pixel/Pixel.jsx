import { useState, useEffect } from "react";
import * as S from "./styled";

const Pixel = ({
  size,
  color,
  isShowingGrid,
  gridColor,
  isMouseDown,
  setColor,
}) => {
  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <S.Pixel
      size={size}
      color={color}
      onMouseOver={isMouseDown ? setColor : () => {}} // maybe use onDrag
      onMouseDown={setColor}
      onDragStart={preventDragHandler}
      showingGrid={isShowingGrid}
      gridColor={gridColor}
    />
  );
};

export default Pixel;
