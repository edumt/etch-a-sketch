import { Center, Slider, ColorInput } from "@mantine/core";
import SketchPadOption from "./SketchPadOption";

const SketchPadOptions = () => {
  const marks = [
    { value: 8, label: 8 },
    { value: 64, label: 64 },
  ];

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
      <Slider
        marks={marks}
        style={{ width: "90%", height: 30, marginBottom: 16 }}
        defaultValue={16}
        min={8}
        max={64}
        step={1}
        label={(value) => value}
        //labelAlwaysOn
      />
    </Center>
  );
};

export default SketchPadOptions;
