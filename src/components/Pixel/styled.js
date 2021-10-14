import styled from "styled-components";

export const Pixel = styled.div.attrs((props) => ({
  style: {
    height: props.size || 75,
    width: props.size || 75,
    backgroundColor: props.color || "white",
    borderWidth: props.size * 0.08 || 6,
  },
}))`
  box-sizing: border-box;
  border: solid transparent;

  &:hover {
    border: solid black;
  }
`;
