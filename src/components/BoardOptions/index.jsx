import { useState } from "react";
import { Center, ColorInput } from "@mantine/core";
import styled from "styled-components";
import ResolutionSlider from "../ResolutionSlider";
import Option from "../Option";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowingGrid } from "../../redux/reducers/boardOptionsSlice";

const Wrapper = styled.div`
  width: 100%;
  margin-left: 20px;
`;

const BoardOptions = ({
  handleResolution,
  handleBackgroundColor,
  handleClearSketchPad,
}) => {
  const isShowingGrid = useSelector(
    ({ boardOptions }) => boardOptions.isShowingGrid,
  );
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(255, 255, 255, 1)",
  );
  const [clearSketchPad, setClearSketchPad] = useState(0);
  const dispatch = useDispatch();

  return (
    <Center
      style={{
        flexDirection: "column-reverse",
        width: 250,
      }}
    >
      <ColorInput
        style={{ margin: "5px 0" }}
        value={backgroundColor}
        format="rgba"
        onChange={(event) => setBackgroundColor(event)}
      />
      <Option
        variant="light"
        color="dark"
        handleClick={() => handleBackgroundColor(backgroundColor)}
      >
        Background Color
      </Option>
      <Option
        variant="light"
        color="dark"
        handleClick={() => {
          setClearSketchPad((clearSketchPad + 1) % 16);
          handleClearSketchPad(clearSketchPad);
        }}
      >
        Clear SketchPad {/* maybe use an icon instead */}
      </Option>
      <Option
        variant="light"
        color="dark"
        handleClick={() => dispatch(toggleShowingGrid())}
      >
        Toggle Grid Lines
      </Option>
      <Wrapper>
        <ResolutionSlider handleResolution={handleResolution} />
      </Wrapper>
    </Center>
  );
};

export default BoardOptions;
