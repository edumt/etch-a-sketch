import { useEffect, useState } from "react";
import { Slider } from "@mantine/core";

interface Props {
  handleResolution: (resolution: number) => void;
}

const ResolutionSlider: React.FC<Props> = ({ handleResolution }) => {
  const minValue = 8;
  const maxValue = 64;
  const marks = [
    { value: minValue, label: minValue },
    { value: maxValue, label: maxValue },
  ];
  const [resolution, setResolution] = useState(16);

  useEffect(() => {
    // debouncing resolution change
    const id = setTimeout(() => handleResolution(resolution), 250);
    return () => clearTimeout(id);
  }, [resolution]);

  return (
    //temp solution, should style it better
    <div style={{ width: "100%", textAlign: "center" }}>
      <span>Grid resolution: {`${resolution} x ${resolution}`}</span>
      <Slider
        marks={marks}
        styles={{ root: { width: "90%", height: 30, marginBottom: 16 } }}
        value={resolution}
        min={minValue}
        max={maxValue}
        step={1}
        label={(resolution) => resolution}
        onChange={setResolution}
      />
    </div>
  );
};

export default ResolutionSlider;
