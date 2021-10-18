//todo: implement slider to change resolution, maybe one to change size too
import { Center, Slider, ColorPicker } from "@mantine/core";
import SketchPadOption from "../SketchPadOption";

const SketchPadOptions = () => {
  return (
    <Center style={{ flexDirection: "column", width: 250 }}>
      <Slider
        style={{ width: "90%", height: 30 }}
        defaultValue={32}
        min={8}
        max={64}
        step={1}
        label={(value) => value}
        labelAlwaysOn
      />
      <ColorPicker />
      <SketchPadOption>Background Color</SketchPadOption>
      <SketchPadOption>
        Clear SketchPad {/* maybe use an icon instead */}
      </SketchPadOption>
      <SketchPadOption>Toggle Grid Lines</SketchPadOption>
    </Center>
  );
};

export default SketchPadOptions;
