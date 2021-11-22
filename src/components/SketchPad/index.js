import { useState } from "react";
import styled from "styled-components";
import Pixel from "../Pixel";

const Wrapper = styled.div`
  height: ${(props) => (props.size ? props.size + "px" : "600px")};
  width: ${(props) => (props.size ? props.size + "px" : "600px")};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid black;
  margin: 0 16px;
`;

const createGrid = (
  size = 600,
  resolution = 16,
  pickedColor,
  backgroundColor,
  clearSketchPad,
  showingGrid,
  isMouseDown
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
  resolution,
  pickedColor,
  backgroundColor,
  clearSketchPad,
  showingGrid,
}) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  return (
    <Wrapper
      size={size}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
    >
      {createGrid(
        size,
        resolution,
        pickedColor,
        backgroundColor,
        clearSketchPad,
        showingGrid,
        isMouseDown
      )}
    </Wrapper>
  );
};

export default SketchPad;
