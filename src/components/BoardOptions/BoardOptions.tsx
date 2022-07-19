import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  clearSketchPad,
  toggleShowingGrid,
  updateBackgroundColor,
  updateGridResolution,
} from "../../redux/reducers/boardSlice";

import { Center, ColorInput } from "@mantine/core";
import Option from "../Option/Option";
import ResolutionSlider from "../ResolutionSlider/ResolutionSlider";
import { Wrapper } from "./styled";

const BoardOptions = () => {
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
        styles={{ root: { margin: "5px 0" } }}
        value={backgroundColor}
        format="rgba"
        onChange={(color) => setBackgroundColor(color)}
        // onChange issue: https://github.com/mantinedev/mantine/issues/1249
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
          handleResolution={(resolution: number) =>
            dispatch(updateGridResolution(resolution))
          }
        />
      </Wrapper>
    </Center>
  );
};

export default BoardOptions;
