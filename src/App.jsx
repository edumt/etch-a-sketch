import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateIsMouseDown } from "./redux/reducers/boardSlice";

import { Center } from "@mantine/core";
import BoardOptions from "./components/BoardOptions/BoardOptions";
import DrawingOptions from "./components/DrawingOptions/DrawingOptions";
import SketchPad from "./components/SketchPad/SketchPad";

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 48px;
`;

function App() {
  const dispatch = useDispatch();

  return (
    <Center
      style={{ height: "100vh", backgroundColor: "snow" }}
      onMouseDown={() => dispatch(updateIsMouseDown(true))}
      onMouseUp={() => dispatch(updateIsMouseDown(false))}
    >
      <DrawingOptions />
      <div>
        <Title>Etch A Sketch</Title>
        <SketchPad />
      </div>
      <BoardOptions />
    </Center>
  );
}

export default App;
