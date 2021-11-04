import { useState } from "react";
import { Center, ColorInput } from "@mantine/core";
import ResolutionSlider from "../ResolutionSlider";
import SketchPadOption from "./SketchPadOption";

const SketchPadOptions = ({ handleResolution, handleBackgroundColor }) => {
  let showingGrid = false;
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  return (
    <Center style={{ flexDirection: "column-reverse", width: 250 }}>
      <ColorInput
        style={{ display: "flex" }}
        value={backgroundColor}
        //format="rgba"
        onChange={(event) => setBackgroundColor(event)}
      />
      <SketchPadOption
        handleClick={() => {
          handleBackgroundColor(backgroundColor);

          //clearSketchpad()
        }}
      >
        Background Color
      </SketchPadOption>
      <SketchPadOption
        handleClick={() => console.log("sketchpad cleared (not implemented)")}
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
