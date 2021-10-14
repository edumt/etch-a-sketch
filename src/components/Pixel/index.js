import styled from "styled-components";

const Pixel = styled.div`
  height: ${(props) => (props.size ? props.size + "px" : "10px")};
  width: ${(props) => (props.size ? props.size + "px" : "10px")};
  box-sizing: border-box;
  border: ${(props) => (props.size ? props.size * 0.1 + "px" : "1px")} solid
    transparent;

  &:hover {
    background-color: grey;
    border: ${(props) => (props.size ? props.size * 0.1 + "px" : "1px")} solid
      black;
  }
`;

export default Pixel;
