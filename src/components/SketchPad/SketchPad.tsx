import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawPixelByIndex } from "../../redux/reducers/boardSlice";
import { RootState } from "../../redux/store";

import Pixel from "../Pixel/Pixel";
import { Wrapper } from "./styled";

const SketchPad = () => {
  const resolution = useSelector((state: RootState) =>
    Math.sqrt(state.board.pixels.length),
  );
  const size = useSelector(
    (state: RootState) => state.board.boardSettings.size,
  );
  const isShowingGrid = useSelector(
    (state: RootState) => state.board.boardSettings.isShowingGrid,
  );
  const gridColor = useSelector(
    (state: RootState) => state.board.boardSettings.gridColor,
  );
  const pixels = useSelector((state: RootState) => state.board.pixels);
  const drawPixel = useCallback(
    (index: number, onClickFlag: boolean) =>
      dispatch(drawPixelByIndex({ index, onClickFlag })),
    [],
  );
  const dispatch = useDispatch();

  return (
    <Wrapper size={size}>
      {pixels.map((pixel, index) => (
        <Pixel
          key={index}
          index={index}
          size={size / resolution}
          color={pixel.color}
          drawPixel={drawPixel}
          isShowingGrid={isShowingGrid}
          gridColor={gridColor}
        />
      ))}
    </Wrapper>
  );
};

export default SketchPad;
