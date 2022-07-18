import styled from "styled-components";

interface Props {
  size: number;
  color: string;
  gridColor: string;
  showingGrid: boolean;
}

export const Pixel = styled.div.attrs((props: Props) => ({
  // to do: remember why I used .attrs lol
  style: {
    height: props.size,
    width: props.size,
    borderWidth: 0.1,
    backgroundColor: props.color,
    borderColor: props.gridColor,
    borderStyle: props.showingGrid ? "solid" : "none",
  },
}))<Props>`
  box-sizing: border-box;
  transition: ease;

  &:hover {
    border-style: dashed !important;
    transition: background-color ease 0.15s;
    //box-shadow: inset 0 0 10px #fff;
  }
`;
