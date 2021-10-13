import styled from "styled-components";

const SketchPad = styled.div`
  height: 640px;
  width: 640px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pixel = styled.div`
  height: ${(props) => (props.size ? props.size + "px" : "64px")};
  width: ${(props) => (props.size ? props.size + "px" : "64px")};
  background-color: grey;

  &:hover {
    background-color: black;
  }
`;

const createGrid = (resolution) => {
  return [...Array(resolution * resolution)].map((_, index) => (
    <Pixel key={index} size={640 / resolution} />
  ));
};

function App() {
  return (
    <Wrapper>
      <SketchPad>{createGrid(100)}</SketchPad>
    </Wrapper>
  );
}

export default App;
