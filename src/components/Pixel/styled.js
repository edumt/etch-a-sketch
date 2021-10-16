import styled from "styled-components";

export const Pixel = styled.div.attrs((props) => ({
  style: {
    height: props.size || 75,
    width: props.size || 75,
    borderWidth: props.size * 0.08 || 6,
    backgroundColor: props.color || "black",
  },
}))`
  box-sizing: border-box;
  border: solid transparent;

  &:hover {
    border: dashed black;
    //box-shadow: inset 0 0 10px #fff;
  }
`;
