import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePickedColor } from "../../redux/reducers/boardSlice";

import { Center, ColorInput } from "@mantine/core";
import Option from "../Option/Option";

const DrawingOptions = () => {
  const [activeOption, setActiveOption] = useState(0);
  const [colorInput, setColorInput] = useState("rgba(0, 0, 0, 1)");
  const dispatch = useDispatch();

  const handleColorPicking = (color: string) =>
    dispatch(updatePickedColor(color));

  const options = [
    { label: "Picked Color", drawMode: colorInput },
    { label: "Eraser", drawMode: "eraser" },
    { label: "Rainbow Mode", drawMode: "rainbow" },
    { label: "Shade", drawMode: "shade" },
    { label: "Tint", drawMode: "tint" },
  ];

  return (
    <Center
      style={{
        flexDirection: "column-reverse",
        width: 250,
        marginTop: "25px",
      }}
    >
      <ColorInput
        styles={{ root: { margin: "5px 0" } }}
        value={colorInput}
        format="rgba"
        onChange={(color) => {
          setColorInput(color);
          if (activeOption === 0) handleColorPicking(colorInput);
        }}
      />
      {options.map((option, idx) => (
        <Option
          key={idx}
          variant={idx === activeOption ? "filled" : "outline"}
          handleClick={() => {
            setActiveOption(idx);
            handleColorPicking(option.drawMode);
          }}
        >
          {option.label}
        </Option>
      ))}
    </Center>
  );
};

export default DrawingOptions;
