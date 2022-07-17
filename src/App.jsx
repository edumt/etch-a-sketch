import { useState } from "react";
import styled from "styled-components";
import SketchPad from "./components/SketchPad/SketchPad";
import DrawingOptions from "./components/DrawingOptions/DrawingOptions";
import BoardOptions from "./components/BoardOptions/BoardOptions";
import { Center } from "@mantine/core";

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 48px;
`;

function App() {
  const [isMouseDown, setIsMouseDown] = useState(false);

  return (
    <Center
      style={{ height: "100vh", backgroundColor: "snow" }}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      // maybe use onDrag
    >
      <DrawingOptions />
      <div>
        <Title>Etch A Sketch</Title>
        <SketchPad isMouseDown={isMouseDown} />
      </div>
      <BoardOptions />
    </Center>
  );
}

export default App;
