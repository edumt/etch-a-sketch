//import { useState } from "react";
import styled from "styled-components";
import SketchPad from "./components/SketchPad";
import SketchPadOptions from "./components/SketchPadOptions";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <SketchPadOptions />
      <SketchPad size={600} resolution={16} />
    </Wrapper>
  );
}

export default App;
