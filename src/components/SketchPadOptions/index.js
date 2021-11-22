import { useState } from "react";
import { Center, ColorInput } from "@mantine/core";
import ResolutionSlider from "../ResolutionSlider";
import SketchPadOption from "./SketchPadOption";

const SketchPadOptions = ({
  handleResolution,
  handleBackgroundColor,
  handleClearSketchPad,
  handleToggleGrid,
}) => {
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(255, 255, 255, 1)"
  );
  let clearSketchPad = false;

  const [showingGrid, setShowingGrid] = useState(false);

  return (
    <Center style={{ flexDirection: "column-reverse", width: 250 }}>
      <ColorInput
        style={{ display: "flex" }}
        value={backgroundColor}
        format="rgba"
        onChange={(event) => setBackgroundColor(event)}
      />
      <SketchPadOption
        handleClick={() => handleBackgroundColor(backgroundColor)}
      >
        Background Color
      </SketchPadOption>
      <SketchPadOption
        handleClick={() => {
          clearSketchPad = !clearSketchPad;
          handleClearSketchPad(clearSketchPad);
        }}
      >
        Clear SketchPad {/* maybe use an icon instead */}
      </SketchPadOption>
      <SketchPadOption
        handleClick={() => {
          handleToggleGrid(!showingGrid);
          setShowingGrid(!showingGrid);
          //console.log(showingGrid);
        }}
      >
        Toggle Grid Lines
      </SketchPadOption>
      <ResolutionSlider handleResolution={handleResolution} />
    </Center>
  );
};

export default SketchPadOptions;
