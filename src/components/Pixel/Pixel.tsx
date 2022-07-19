import React, { SyntheticEvent } from "react";

import * as S from "./styled";

interface Props {
  index: number;
  size: number;
  color: string;
  isShowingGrid: boolean;
  gridColor: string;
  drawPixel: (index: number, onClickFlag: boolean) => void;
}

const Pixel: React.FC<Props> = React.memo(
  ({ index, size, color, isShowingGrid, gridColor, drawPixel }) => {
    const preventDragHandler = (e: SyntheticEvent) => {
      e.preventDefault();
    };

    return (
      <S.Pixel
        size={size}
        color={color}
        onMouseOver={() => drawPixel(index, false)}
        onMouseDown={() => drawPixel(index, true)}
        onDragStart={preventDragHandler} // maybe use onDrag to draw too
        showingGrid={isShowingGrid}
        gridColor={gridColor}
      />
    );
  },
);

export default Pixel;
