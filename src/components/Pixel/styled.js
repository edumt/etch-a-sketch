import styled from "styled-components";

export const Pixel = styled.div.attrs((props) => ({
  style: {
    height: props.size,
    width: props.size,
    backgroundColor: props.color,
    borderWidth: props.size * 0.08,
  },
}))`
  box-sizing: border-box;
  border: solid transparent;

  &:hover {
    border: solid black;
  }
`;
