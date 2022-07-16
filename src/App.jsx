import { useState } from "react";
import styled from "styled-components";
import SketchPad from "./components/SketchPad";
import DrawingOptions from "./components/DrawingOptions/index";
import BoardOptions from "./components/BoardOptions/index";
import { Center } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { setGridResolution } from "./redux/reducers/boardOptionsSlice";

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 48px;
`;

function App() {
  const gridResolution = useSelector(
    (state) => state.boardOptions.gridResolution,
  );
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(255, 255, 255, 1)",
  );
  const [clearSketchPad, setClearSketchPad] = useState(false);
  const [isShowingGrid, setIsShowingGrid] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const dispatch = useDispatch();

  return (
    <Center
      style={{ height: "100vh", backgroundColor: "snow" }}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
    >
      <DrawingOptions />
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
      <BoardOptions
        handleResolution={(resolution) => {
          setClearSketchPad(!clearSketchPad);
          dispatch(setGridResolution(resolution));
        }}
        handleBackgroundColor={setBackgroundColor}
        handleClearSketchPad={setClearSketchPad}
        handleToggleGrid={setIsShowingGrid}
      />
    </Center>
  );
}

export default App;
