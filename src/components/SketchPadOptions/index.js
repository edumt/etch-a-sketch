import { useState } from "react";
import { Center, ColorInput } from "@mantine/core";
import ResolutionSlider from "../ResolutionSlider";
import Option from "../Option";

const SketchPadOptions = ({
  handleResolution,
  handleBackgroundColor,
  handleClearSketchPad,
  handleToggleGrid,
}) => {
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(255, 255, 255, 1)"
  );
  const [clearSketchPad, setClearSketchPad] = useState(false);

  const [showingGrid, setShowingGrid] = useState(false);

  return (
    <Center style={{ flexDirection: "column-reverse", width: 250 }}>
      <ColorInput
        style={{ display: "flex" }}
        value={backgroundColor}
        format="rgba"
        onChange={(event) => setBackgroundColor(event)}
      />
      <Option handleClick={() => handleBackgroundColor(backgroundColor)}>
        Background Color
      </Option>
      <Option
        handleClick={() => {
          handleClearSketchPad(!clearSketchPad);
          setClearSketchPad(!clearSketchPad);
        }}
      >
        Clear SketchPad {/* maybe use an icon instead */}
      </Option>
      <Option
        handleClick={() => {
          handleToggleGrid(!showingGrid);
          setShowingGrid(!showingGrid);
          //console.log(showingGrid);
        }}
      >
        Toggle Grid Lines
      </Option>
      <ResolutionSlider handleResolution={handleResolution} />
    </Center>
  );
};

export default SketchPadOptions;
