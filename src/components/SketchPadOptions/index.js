import { useState } from "react";
import { Center, ColorInput } from "@mantine/core";
import ResolutionSlider from "../ResolutionSlider";
import SketchPadOption from "./SketchPadOption";

const SketchPadOptions = ({
  handleResolution,
  handleBackgroundColor,
  handleClearSketchPad,
}) => {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  let clearSketchPad = false;

  let showingGrid = false;

  return (
    <Center style={{ flexDirection: "column-reverse", width: 250 }}>
      <ColorInput
        style={{ display: "flex" }}
        value={backgroundColor}
        //format="rgba"
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
          showingGrid = !showingGrid;
          console.log(`showingGrid: ${showingGrid}, not yet implemented`);
        }}
      >
        Toggle Grid Lines
      </SketchPadOption>
      <ResolutionSlider handleResolution={handleResolution} />
    </Center>
  );
};

export default SketchPadOptions;
