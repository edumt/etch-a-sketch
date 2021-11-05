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
  clearSketchPad
) => {
  return [...Array(resolution * resolution)].map((_, index) => (
    <Pixel
      key={index}
      size={size / resolution}
      pickedColor={pickedColor}
      backgroundColor={backgroundColor}
      clearSketchPad={clearSketchPad}
    />
  ));
};

const SketchPad = ({
  size,
  resolution,
  pickedColor,
  backgroundColor,
  clearSketchPad,
}) => {
  return (
    <Wrapper size={size}>
      {createGrid(
        size,
        resolution,
        pickedColor,
        backgroundColor,
        clearSketchPad
      )}
    </Wrapper>
  );
};

export default SketchPad;
