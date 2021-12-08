import styled from "styled-components";

export const Pixel = styled.div.attrs((props) => ({
  style: {
    height: props.size || 75,
    width: props.size || 75,
    borderWidth: 0.1,
    backgroundColor: props.color,
    borderColor: props.gridColor,
    borderStyle: props.showingGrid ? "solid" : "none",
  },
}))`
  box-sizing: border-box;
  transition: ease;

  &:hover {
    border-style: dashed !important;
    transition: background-color ease 0.15s;
    //box-shadow: inset 0 0 10px #fff;
  }
`;
