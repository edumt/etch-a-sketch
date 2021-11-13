import styled from "styled-components";

export const Pixel = styled.div.attrs((props) => ({
  style: {
    height: props.size || 75,
    width: props.size || 75,
    borderWidth: props.size / 25,
    backgroundColor: props.color,
    borderColor: props.gridColor,
    borderStyle: props.showingGrid ? "solid" : "none",

    //borderColor: "gray",
    //color: console.log(props.showingGrid),
  },
}))`
  box-sizing: border-box;
  //border-width: 0.5px;
  transition: ease;

  &:hover {
    //border-width: 3px !important;
    border-style: dashed !important;
    transition: background-color ease 0.15s;
    //box-shadow: inset 0 0 10px #fff;
  }
`;
