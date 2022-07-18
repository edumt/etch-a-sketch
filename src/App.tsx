import { useDispatch } from "react-redux";
import { updateIsMouseDown } from "./redux/reducers/boardSlice";

import { Center } from "@mantine/core";
import BoardOptions from "./components/BoardOptions/BoardOptions";
import DrawingOptions from "./components/DrawingOptions/DrawingOptions";
import MainContent from "./components/MainContent/MainContent";

function App() {
  const dispatch = useDispatch();

  return (
    <Center
      style={{ height: "100vh", backgroundColor: "snow" }}
      onMouseDown={() => dispatch(updateIsMouseDown(true))}
      onMouseUp={() => dispatch(updateIsMouseDown(false))}
    >
      <DrawingOptions />
      <MainContent />
      <BoardOptions />
    </Center>
  );
}

export default App;
