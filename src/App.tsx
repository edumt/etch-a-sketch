import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateIsMouseDown } from "./redux/reducers/boardSlice";

import { Center } from "@mantine/core";
import BoardOptions from "./components/BoardOptions/BoardOptions";
import DrawingOptions from "./components/DrawingOptions/DrawingOptions";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();

  // to do: update README, add stack details
  // to do: improve layout/css
  // to do: work around mantine's colorinput onChange bug
  // to do: try to improve grid lines thickness
  // to do: add more options:
  // - high contrast grid line,
  // - maybe draw many pixels at once,
  // - maybe tint/shade potency,
  return (
    <Grid style={{ height: "100%" }}>
      <Center
        style={{ height: "100%" }}
        onMouseDown={() => dispatch(updateIsMouseDown(true))}
        onMouseUp={() => dispatch(updateIsMouseDown(false))}
      >
        <DrawingOptions />
        <MainContent />
        <BoardOptions />
      </Center>
      <Footer />
    </Grid>
  );
}

export default App;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  background-color: snow;
`;
