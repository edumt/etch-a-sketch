import { useState } from "react";
import { Slider } from "@mantine/core";

const ResolutionSlider = ({ handleResolution }) => {
  const marks = [
    { value: 8, label: 8 },
    { value: 64, label: 64 },
  ];
  const [value, setValue] = useState(16);

  return (
    //temp solution, should style it better
    <div style={{ width: "80%", textAlign: "center" }}>
      <span>Grid resolution: {`${value} x ${value}`}</span>
      <Slider
        marks={marks}
        style={{ width: "90%", height: 30, marginBottom: 16 }}
        value={value}
        min={8}
        max={64}
        step={1}
        label={(value) => value}
        onChange={(e) => setValue(e)}
        onMouseUp={() => handleResolution(value)}
        //labelAlwaysOn
      />
    </div>
  );
};

export default ResolutionSlider;
