import { useDispatch, useSelector } from "react-redux";

import { setPixelColorByIndex } from "../../redux/reducers/boardSlice";
import Pixel from "../Pixel/Pixel";
import { Wrapper } from "./styled";

const SketchPad = ({ backgroundColor, clearSketchPad, isMouseDown }) => {
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

  const setColor = (index) => (color) =>
    dispatch(setPixelColorByIndex({ index, color }));

  return (
    <Wrapper size={size}>
      {pixels.map((pixel, index) => (
        <Pixel
          key={index}
          size={size / resolution}
          pickedColor={pickedColor}
          backgroundColor={backgroundColor}
          clearSketchPad={clearSketchPad}
          showingGrid={isShowingGrid}
          isMouseDown={isMouseDown}
          color={pixel.color}
          setColor={setColor(index)}
        />
      ))}
    </Wrapper>
  );
};

export default SketchPad;
