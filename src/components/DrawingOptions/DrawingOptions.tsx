import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePickedColor } from "../../redux/reducers/boardSlice";

import { Center, ColorInput, ButtonVariant } from "@mantine/core";
import Option from "../Option/Option";

const DrawingOptions = () => {
  const [activeOption, setActiveOption] = useState(0);
  const [colorInput, setColorInput] = useState("rgba(0, 0, 0, 1)");
  const dispatch = useDispatch();

  const handleColorPicking = (color: string) =>
    dispatch(updatePickedColor(color));

  const optionsVariant: ButtonVariant[] = [];
  for (let i = 0; i < 5; i++) {
    if (i === activeOption) optionsVariant[i] = "filled";
    else optionsVariant[i] = "outline";
  }

  return (
    <Center
      style={{
        flexDirection: "column-reverse",
        width: 250,
        marginTop: "25px",
      }}
    >
      <ColorInput
        style={{ margin: "5px 0" }}
        value={colorInput}
        format="rgba"
        onChange={(event) => {
          setColorInput(event);
          if (activeOption === 0) handleColorPicking(colorInput);
        }}
      />
      <Option
        variant={optionsVariant[0]!}
        handleClick={() => {
          setActiveOption(0);
          handleColorPicking(colorInput);
        }}
      >
        Picked Color
      </Option>
      <Option
        variant={optionsVariant[1]!}
        handleClick={() => {
          setActiveOption(1);
          handleColorPicking("eraser");
        }}
      >
        Eraser
      </Option>
      <Option
        variant={optionsVariant[2]!}
        handleClick={() => {
          setActiveOption(2);
          handleColorPicking("rainbow");
        }}
      >
        Rainbow Mode
      </Option>
      <Option
        variant={optionsVariant[4]!}
        handleClick={() => {
          setActiveOption(4);
          handleColorPicking("tint");
        }}
      >
        Tint
      </Option>
      <Option
        variant={optionsVariant[3]!}
        handleClick={() => {
          setActiveOption(3);
          handleColorPicking("shade");
        }}
      >
        Shade
      </Option>
    </Center>
  );
};

export default DrawingOptions;
