//import { useState } from "react";
import styled from "styled-components";
import SketchPad from "./components/SketchPad";
//import SketchPadOptions from "./components/SketchPadOptions";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <Wrapper>
      {/* <SketchPadOptions /> */}
      <SketchPad size={600} resolution={8} />
    </Wrapper>
  );
}

export default App;
