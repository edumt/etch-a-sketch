import { useState } from "react";
import * as S from "./styled";

const Pixel = ({ size }) => {
  const [color, setColor] = useState("#FFFFFF");

  const randomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  const handleHover = () => {
    //todo: track if left button is pressed
    console.log(MouseEvent.buttons);
    setColor(randomColor());
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
