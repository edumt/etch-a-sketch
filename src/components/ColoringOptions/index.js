import { Center, ColorPicker } from "@mantine/core";
import ColoringOption from "../ColoringOption";

const ColoringOptions = () => {
  return (
    <Center style={{ flexDirection: "column", width: 250 }}>
      <ColorPicker />
      <ColoringOption>Picked Color</ColoringOption>
      <ColoringOption>Eraser</ColoringOption>
      <ColoringOption>Rainbow Mode</ColoringOption>
      <ColoringOption>Tint</ColoringOption>
      <ColoringOption>Shade</ColoringOption>
    </Center>
  );
};

export default ColoringOptions;
