import { useState, useEffect } from "react";
import * as S from "./styled";

const Pixel = ({ size, pickedColor, backgroundColor, clearSketchPad }) => {
  const randomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  const [color, setColor] = useState(backgroundColor);
  const [bgColor, setBgColor] = useState(backgroundColor);

  useEffect(() => {
    if (color === bgColor) setColor(backgroundColor);
    setBgColor(backgroundColor);
  }, [backgroundColor]);

  useEffect(() => {
    if (color !== backgroundColor) setColor(backgroundColor);
  }, [clearSketchPad]);

  const handleHover = () => {
    //todo: track if left button is pressed to draw
    switch (pickedColor) {
      case "eraser":
        setColor(backgroundColor);
        break;
      case "rainbow":
        setColor(randomColor());
        break;
      case "tint":
        // todo
        setColor(randomColor());
        break;
      case "shade":
        // todo
        setColor(randomColor());
        break;
      default:
        setColor(pickedColor);
    }
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
