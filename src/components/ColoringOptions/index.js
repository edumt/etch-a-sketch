import { useState } from "react";
import { Center, ColorInput } from "@mantine/core";
import ColoringOption from "./ColoringOption";

const ColoringOptions = () => {
  const [activeOption, setActiveOption] = useState(0);
  const optionsVariant = [];
  for (let i = 0; i < 5; i++) {
    if (i === activeOption) optionsVariant[i] = "filled";
    else optionsVariant[i] = "outline";
  }

  return (
    <Center style={{ flexDirection: "column-reverse", width: 250 }}>
      <ColorInput value={"#000000"} />
      <ColoringOption
        variant={optionsVariant[0]}
        handleClick={() => setActiveOption(0)}
      >
        Picked Color
      </ColoringOption>
      <ColoringOption
        variant={optionsVariant[1]}
        value={1}
        handleClick={() => setActiveOption(1)}
      >
        Eraser
      </ColoringOption>
      <ColoringOption
        variant={optionsVariant[2]}
        handleClick={() => setActiveOption(2)}
      >
        Rainbow Mode
      </ColoringOption>
      <ColoringOption
        variant={optionsVariant[3]}
        handleClick={() => setActiveOption(3)}
      >
        Shade
      </ColoringOption>
      <ColoringOption
        variant={optionsVariant[4]}
        handleClick={() => setActiveOption(4)}
      >
        Tint
      </ColoringOption>
    </Center>
  );
};

export default ColoringOptions;
