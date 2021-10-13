import styled from "styled-components";

const SketchPad = styled.div`
  height: 640px;
  width: 640px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Asdf = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pixel = styled.div`
  height: 64px;
  width: 64px;
  background-color: red;
`;

const createGrid = (size) => {
  return [...Array(size)].map((_, index) => <Pixel key={index} />);
};

function App() {
  return (
    <Asdf>
      <SketchPad>{createGrid(100)}</SketchPad>
    </Asdf>
  );
}

export default App;
