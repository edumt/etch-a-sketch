import { useState } from "react";
import styled from "styled-components";
import SketchPad from "./components/SketchPad";
import ColoringOptions from "./components/ColoringOptions";
import SketchPadOptions from "./components/SketchPadOptions";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [pickedColor, setPickedColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [gridResolution, setGridResolution] = useState(16);

  return (
    <Wrapper>
      <ColoringOptions handleColorPicking={setPickedColor} />
      <div>
        <h1>Etch-a-Sketch</h1>
        <SketchPad
          size={600}
          resolution={gridResolution}
          pickedColor={pickedColor}
          backgroundColor={backgroundColor}
        />
      </div>
      <SketchPadOptions
        handleResolution={setGridResolution}
        handleBackgroundColor={setBackgroundColor}
      />
    </Wrapper>
  );
}

export default App;
