//todo: implement slider to change resolution, maybe one to change size too
import { Center, Button, ColorPicker } from "@mantine/core";

const ColoringOptions = () => {
  return (
    <Center style={{ flexDirection: "column", width: 250 }}>
      <ColorPicker />
      <Button>Picked Color</Button>
      <Button>Eraser</Button>
      <Button>Rainbow Mode</Button>
      <Button>Tint</Button>
      <Button>Shade</Button>
    </Center>
  );
};

export default ColoringOptions;
