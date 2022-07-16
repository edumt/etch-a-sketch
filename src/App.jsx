import { useState } from "react";
import styled from "styled-components";
import SketchPad from "./components/SketchPad";
import ColoringOptions from "./components/ColoringOptions";
import SketchPadOptions from "./components/SketchPadOptions";
import { Center } from "@mantine/core";

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 48px;
`;

function App() {
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(255, 255, 255, 1)",
  );
  const [gridResolution, setGridResolution] = useState(16);
  const [clearSketchPad, setClearSketchPad] = useState(false);
  const [isShowingGrid, setIsShowingGrid] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  return (
    <Center
      style={{ height: "100vh", backgroundColor: "snow" }}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
    >
      <ColoringOptions />
      <div>
        <Title>Etch A Sketch</Title>
        <SketchPad
          size={600}
          resolution={gridResolution}
          backgroundColor={backgroundColor}
          clearSketchPad={clearSketchPad}
          showingGrid={isShowingGrid}
          isMouseDown={isMouseDown}
        />
      </div>
      <SketchPadOptions
        handleResolution={(resolution) => {
          setClearSketchPad(!clearSketchPad);
          setGridResolution(resolution);
        }}
        handleBackgroundColor={setBackgroundColor}
        handleClearSketchPad={setClearSketchPad}
        handleToggleGrid={setIsShowingGrid}
      />
    </Center>
  );
}

export default App;
