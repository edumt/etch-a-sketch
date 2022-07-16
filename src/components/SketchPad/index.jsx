import { useSelector } from "react-redux";

import styled from "styled-components";
import Pixel from "../Pixel";

const Wrapper = styled.div`
  height: ${(props) => (props.size ? props.size + "px" : "600px")};
  width: ${(props) => (props.size ? props.size + "px" : "600px")};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #444;
  margin: 0 16px;
`;

const createGrid = (
  size,
  resolution,
  pickedColor,
  backgroundColor,
  clearSketchPad,
  showingGrid,
  isMouseDown,
) => {
  return [...Array(resolution * resolution)].map((_, index) => (
    <Pixel
      key={index}
      size={size / resolution}
      pickedColor={pickedColor}
      backgroundColor={backgroundColor}
      clearSketchPad={clearSketchPad}
      showingGrid={showingGrid}
      isMouseDown={isMouseDown}
    />
  ));
};

const SketchPad = ({
  size,
  backgroundColor,
  clearSketchPad,
  showingGrid,
  isMouseDown,
}) => {
  const pickedColor = useSelector(
    ({ drawingOptions }) => drawingOptions.pickedColor,
  );
  const resolution = useSelector(
    ({ boardOptions }) => boardOptions.gridResolution,
  );

  return (
    <Wrapper size={size}>
      {createGrid(
        size,
        resolution,
        pickedColor,
        backgroundColor,
        clearSketchPad,
        showingGrid,
        isMouseDown,
      )}
    </Wrapper>
  );
};

export default SketchPad;
