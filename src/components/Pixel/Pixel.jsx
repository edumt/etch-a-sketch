import { useState, useEffect } from "react";
import * as S from "./styled";

const Pixel = ({
  size,
  color,
  pickedColor,
  clearSketchPad,
  showingGrid,
  isMouseDown,
  setColor,
}) => {
  const [isShowingGrid, setIsShowingGrid] = useState(showingGrid);

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <S.Pixel
      size={size}
      color={color}
      onMouseOver={isMouseDown ? setColor : () => {}}
      onMouseDown={setColor}
      onDragStart={preventDragHandler}
      // showingGrid={isShowingGrid}
      // gridColor={gridColor}
    />
  );
};

export default Pixel;
