import { useDispatch, useSelector } from "react-redux";

import { drawPixelByIndex } from "../../redux/reducers/boardSlice";
import Pixel from "../Pixel/Pixel";
import { Wrapper } from "./styled";

const SketchPad = ({ isMouseDown }) => {
  const pickedColor = useSelector((state) => {
    const { drawingSettings } = state.board;
    return drawingSettings.pickedColor;
  });
  const [resolution, size, isShowingGrid, gridColor] = useSelector((state) => {
    const { isShowingGrid, gridColor, size } = state.board.boardSettings;
    const gridResolution = Math.sqrt(state.board.pixels.length);
    return [gridResolution, size, isShowingGrid, gridColor];
  });
  const pixels = useSelector((state) => state.board.pixels);
  const dispatch = useDispatch();

  return (
    <Wrapper size={size}>
      {pixels.map((pixel, index) => (
        <Pixel
          key={index}
          size={size / resolution}
          isMouseDown={isMouseDown}
          color={pixel.color}
          setColor={() => dispatch(drawPixelByIndex(index))}
          isShowingGrid={isShowingGrid}
          gridColor={gridColor}
        />
      ))}
    </Wrapper>
  );
};

export default SketchPad;
