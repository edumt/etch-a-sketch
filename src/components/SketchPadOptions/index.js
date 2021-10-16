//todo: implement slider to change resolution, maybe one to change size too
import { Center, Button, Slider } from "@mantine/core";

const SketchPadOptions = () => {
  return (
    <Center style={{ flexDirection: "column", width: 250 }}>
      <Button>Picked Color</Button>
      <Button>Eraser</Button>
      <Button>Rainbow Mode</Button>
      <Button>Tint</Button>
      <Button>Shade</Button>
      <Button>Toggle Grid Lines</Button>
      {/* <Slider
        defaultValue={16}
        min={4}
        max={100}
        step={1}
        label={(value) => value}
        labelAlwaysOn
      /> */}
      <Slider
        style={{ width: "90%", height: 30 }}
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
    </Center>
  );
};

export default SketchPadOptions;
