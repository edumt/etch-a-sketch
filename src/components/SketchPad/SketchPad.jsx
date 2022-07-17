import { useDispatch, useSelector } from "react-redux";

import { drawPixelByIndex } from "../../redux/reducers/boardSlice";
import Pixel from "../Pixel/Pixel";
import { Wrapper } from "./styled";

const SketchPad = ({ clearSketchPad, isMouseDown }) => {
  const pickedColor = useSelector((state) => {
    const { drawingSettings } = state.board;
    return drawingSettings.pickedColor;
  });
  const [resolution, isShowingGrid, size] = useSelector((state) => {
    const { gridResolution, isShowingGrid, size } = state.board.boardSettings;
    return [gridResolution, isShowingGrid, size];
  });
  const pixels = useSelector(({ board }) => board.pixels);
  const dispatch = useDispatch();

  return (
    <Wrapper size={size}>
      {pixels.map((pixel, index) => (
        <Pixel
          key={index}
          size={size / resolution}
          pickedColor={pickedColor}
          clearSketchPad={clearSketchPad}
          showingGrid={isShowingGrid}
          isMouseDown={isMouseDown}
          color={pixel.color}
          setColor={() => dispatch(drawPixelByIndex(index))}
        />
      ))}
    </Wrapper>
  );
};

export default SketchPad;
