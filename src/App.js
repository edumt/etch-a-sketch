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

  return (
    <Wrapper>
      <ColoringOptions handleColorPicking={setPickedColor} />
      <SketchPad
        size={600}
        resolution={16}
        pickedColor={pickedColor}
        backgroundColor={backgroundColor}
      />
      <SketchPadOptions />
    </Wrapper>
  );
}

export default App;
