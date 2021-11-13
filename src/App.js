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
  const [pickedColor, setPickedColor] = useState("rgba(0, 0, 0, 1)");
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(255, 255, 255, 1)"
  );
  const [gridResolution, setGridResolution] = useState(16);
  const [clearSketchPad, setClearSketchPad] = useState(false);
  const [isShowingGrid, setIsShowingGrid] = useState(false);

  return (
    <Wrapper>
      <ColoringOptions handleColorPicking={setPickedColor} />
      <div>
        <h1>Etch A Sketch</h1>
        <SketchPad
          size={600}
          resolution={gridResolution}
          pickedColor={pickedColor}
          backgroundColor={backgroundColor}
          clearSketchPad={clearSketchPad}
          showingGrid={isShowingGrid}
        />
      </div>
      <SketchPadOptions
        handleResolution={setGridResolution}
        handleBackgroundColor={setBackgroundColor}
        handleClearSketchPad={setClearSketchPad}
        handleToggleGrid={setIsShowingGrid}
      />
    </Wrapper>
  );
}

export default App;
