//todo: implement slider to change resolution, maybe one to change size too
import { Center, Button, Slider, ColorPicker } from "@mantine/core";

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
      <Button>Background Color</Button>
      <Button>Clear SketchPad {/* maybe use an icon instead */}</Button>
      <Button>Toggle Grid Lines</Button>
    </Center>
  );
};

export default SketchPadOptions;
