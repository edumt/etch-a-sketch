import styled from "styled-components";
import Pixel from "../Pixel";

const Wrapper = styled.div`
  height: ${(props) => (props.size ? props.size + "px" : "600px")};
  width: ${(props) => (props.size ? props.size + "px" : "600px")};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid black;
`;

const createGrid = (size, resolution) => {
  return [...Array(resolution * resolution)].map((_, index) => (
    <Pixel key={index} size={size / resolution} />
  ));
};

const SketchPad = ({ size, resolution }) => {
  return <Wrapper size={size}>{createGrid(size, resolution)}</Wrapper>;
};

export default SketchPad;
