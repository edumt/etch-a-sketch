import { useDispatch } from "react-redux";
import { updateIsMouseDown } from "./redux/reducers/boardSlice";

import { Center } from "@mantine/core";
import BoardOptions from "./components/BoardOptions/BoardOptions";
import DrawingOptions from "./components/DrawingOptions/DrawingOptions";
import MainContent from "./components/MainContent/MainContent";

function App() {
  const dispatch = useDispatch();

  // to do: update README, add stack details
  // to do: improve layout/css
  // to do: maybe debounce the grid resolution update
  // to do: add simple footer with social links
  // to do: work around mantine's colorinput onChange bug
  // to do: try to improve grid lines thickness
  // to do: add more options:
  // - high contrast grid line,
  // - maybe draw many pixels at once,
  // - maybe tint/shade potency,
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
