import { useState } from "react";
import { Center, ColorInput } from "@mantine/core";
import styled from "styled-components";
import ResolutionSlider from "../ResolutionSlider/ResolutionSlider";
import Option from "../Option/Option";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleShowingGrid,
  updateBackgroundColor,
  clearSketchPad,
  updateGridResolution,
} from "../../redux/reducers/boardSlice";

const Wrapper = styled.div`
  width: 100%;
  margin-left: 20px;
`;

const BoardOptions = ({ handleResolution }) => {
  const isShowingGrid = useSelector((state) => {
    const { boardSettings } = state.board;
    return boardSettings.isShowingGrid;
  });
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(255, 255, 255, 1)",
  );
  const dispatch = useDispatch();

  return (
    <Center
      style={{
        flexDirection: "column-reverse",
        width: 250,
      }}
    >
      <ColorInput
        style={{ margin: "5px 0" }}
        value={backgroundColor}
        format="rgba"
        onChange={(event) => setBackgroundColor(event)}
      />
      <Option
        variant="light"
        color="dark"
        handleClick={() => dispatch(updateBackgroundColor(backgroundColor))}
      >
        Background Color
      </Option>
      <Option
        variant="light"
        color="dark"
        handleClick={() => dispatch(clearSketchPad())}
      >
        Clear SketchPad {/* maybe use an icon instead */}
      </Option>
      <Option
        variant="light"
        color="dark"
        handleClick={() => dispatch(toggleShowingGrid())}
      >
        Toggle Grid Lines
      </Option>
      <Wrapper>
        <ResolutionSlider
          handleResolution={(resolution) =>
            dispatch(updateGridResolution(resolution))
          }
        />
      </Wrapper>
    </Center>
  );
};

export default BoardOptions;
