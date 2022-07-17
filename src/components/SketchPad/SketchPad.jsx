import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { setPixelColorByIndex } from "../../redux/reducers/boardSlice";
import Pixel from "../Pixel/Pixel";

const Wrapper = styled.div`
  height: ${(props) => (props.size ? `${props.size}px` : "600px")};
  width: ${(props) => (props.size ? `${props.size}px` : "600px")};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #444;
  margin: 0 16px;
`;

const createGrid = (
  size,
  pixels,
  resolution,
  pickedColor,
  backgroundColor,
  clearSketchPad,
  isShowingGrid,
  isMouseDown,
  setColor,
) => {
  return pixels.map((pixel, index) => (
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
  ));
};

const SketchPad = ({ size, backgroundColor, clearSketchPad, isMouseDown }) => {
  const pickedColor = useSelector((state) => {
    const { drawingOptions } = state.board;
    return drawingOptions.pickedColor;
  });
  const [resolution, isShowingGrid] = useSelector((state) => {
    const { boardOptions } = state.board;
    return [boardOptions.gridResolution, boardOptions.isShowingGrid];
  });
  const pixels = useSelector(({ board }) => board.pixels);
  const dispatch = useDispatch();

  const setColor = (index) => (color) =>
    dispatch(setPixelColorByIndex({ index, color }));

  return (
    <Wrapper size={size}>
      {createGrid(
        size,
        pixels,
        resolution,
        pickedColor,
        backgroundColor,
        clearSketchPad,
        isShowingGrid,
        isMouseDown,
        setColor,
      )}
    </Wrapper>
  );
};

export default SketchPad;
