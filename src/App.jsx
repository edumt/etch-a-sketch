import { useState } from "react";
import styled from "styled-components";
import SketchPad from "./components/SketchPad/SketchPad";
import DrawingOptions from "./components/DrawingOptions/DrawingOptions";
import BoardOptions from "./components/BoardOptions/BoardOptions";
import { Center } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { updateGridResolution } from "./redux/reducers/boardSlice";

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 48px;
`;

function App() {
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(255, 255, 255, 1)",
  );
  const [clearSketchPad, setClearSketchPad] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const dispatch = useDispatch();

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
        <SketchPad
          size={600}
          backgroundColor={backgroundColor}
          clearSketchPad={clearSketchPad}
          isMouseDown={isMouseDown}
        />
      </div>
      <BoardOptions
        handleResolution={(resolution) => {
          setClearSketchPad(!clearSketchPad);
          dispatch(updateGridResolution(resolution)); // to do: move inside BoardOptions
        }}
        handleBackgroundColor={setBackgroundColor}
        handleClearSketchPad={setClearSketchPad}
      />
    </Center>
  );
}

export default App;
