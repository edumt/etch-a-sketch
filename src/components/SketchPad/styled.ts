import styled from "styled-components";

export const Wrapper = styled.div<{ size: number }>`
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #444;
  margin: 0 16px;
`;
