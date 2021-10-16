import { useState } from "react";
import * as S from "./styled";

const Pixel = ({ size }) => {
  const [color, setColor] = useState("#FFFFFF");

  const randomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  const handleHover = () => {
    //todo: track if left button is pressed to draw
    setColor(randomColor());
    //let pickedColor = "#000000"; //testing variable, need to implement color picker
    //setColor(pickedColor);
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
