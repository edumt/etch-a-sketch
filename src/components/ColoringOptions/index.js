import { useState } from "react";
import { Center, ColorInput } from "@mantine/core";
import ColoringOption from "./ColoringOption";

const ColoringOptions = ({ handleColorPicking }) => {
  const [activeOption, setActiveOption] = useState(0);
  const optionsVariant = [];
  for (let i = 0; i < 5; i++) {
    if (i === activeOption) optionsVariant[i] = "filled";
    else optionsVariant[i] = "outline";
  }
  const [pickedColor, setPickedColor] = useState("rgba(0, 0, 0, 1)");

  return (
    <Center style={{ flexDirection: "column-reverse", width: 250 }}>
      <ColorInput
        style={{ display: "flex" }}
        value={pickedColor}
        format="rgba"
        onChange={(event) => {
          setPickedColor(event);
          if (activeOption === 0) handleColorPicking(pickedColor);
        }}
      />
      <ColoringOption
        variant={optionsVariant[0]}
        handleClick={() => {
          setActiveOption(0);
          handleColorPicking(pickedColor);
        }}
      >
        Picked Color
      </ColoringOption>
      <ColoringOption
        variant={optionsVariant[1]}
        value={1}
        handleClick={() => {
          setActiveOption(1);
          handleColorPicking("eraser");
        }}
      >
        Eraser
      </ColoringOption>
      <ColoringOption
        variant={optionsVariant[2]}
        handleClick={() => {
          setActiveOption(2);
          handleColorPicking("rainbow");
        }}
      >
        Rainbow Mode
      </ColoringOption>
      <ColoringOption
        variant={optionsVariant[4]}
        handleClick={() => {
          setActiveOption(4);
          handleColorPicking("tint");
        }}
      >
        Tint
      </ColoringOption>
      <ColoringOption
        variant={optionsVariant[3]}
        handleClick={() => {
          setActiveOption(3);
          handleColorPicking("shade");
        }}
      >
        Shade
      </ColoringOption>
    </Center>
  );
};

export default ColoringOptions;
