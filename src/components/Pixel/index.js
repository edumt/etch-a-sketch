import { useState } from "react";
import * as S from "./styled";

const Pixel = ({ size, pickedColor, backgroundColor }) => {
  const randomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  const [color, setColor] = useState(backgroundColor);

  const handleHover = () => {
    //todo: track if left button is pressed to draw
    setColor(pickedColor);
    //console.log(pickedColor);
  };

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <S.Pixel
      size={size}
      color={color}
      onMouseOver={handleHover}
      onDragStart={preventDragHandler}
    />
  );
};

export default Pixel;
