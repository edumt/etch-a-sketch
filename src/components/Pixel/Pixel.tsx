import { SyntheticEvent } from "react";

import * as S from "./styled";

interface Props {
  size: number;
  color: string;
  isShowingGrid: boolean;
  gridColor: string;
  drawPixel: (onClickFlag: boolean) => void;
}

const Pixel: React.FC<Props> = ({
  size,
  color,
  isShowingGrid,
  gridColor,
  drawPixel,
}) => {
  const preventDragHandler = (e: SyntheticEvent) => {
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
