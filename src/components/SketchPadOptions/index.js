import { Center, ColorInput } from "@mantine/core";
import ResolutionSlider from "../ResolutionSlider";
import SketchPadOption from "./SketchPadOption";

const SketchPadOptions = ({ handleResolution }) => {
  let showingGrid = false;

  return (
    <Center style={{ flexDirection: "column-reverse", width: 250 }}>
      <ColorInput value={"#FFFFFF"} />
      <SketchPadOption
        handleClick={() =>
          console.log("background color changed (not implemented)")
        }
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
