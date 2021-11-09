import { useState, useEffect } from "react";
import * as S from "./styled";

const Pixel = ({ size, pickedColor, backgroundColor, clearSketchPad }) => {
  //const randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomRGB = () => Math.floor(Math.random() * 255);
  const randomRGBA = () =>
    `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, 1)`;

  const getRGBA = (color) =>
    color
      .slice(5, -1) // removes 'rgba(' and ')'
      .split(",")
      .map((item) => item.trim());
  const tintShade = (color, potency) => {
    const verifyLimit = (rgb) => {
      if (rgb > 255) rgb = 255;
      else if (rgb < 0) rgb = 0;
      return rgb;
    };

    let [r, g, b] = getRGBA(color).map((item) =>
      verifyLimit(+item + potency * 25)
    );

    return `rgba(${r}, ${g}, ${b}, 1)`;
  };
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
        setColor(randomRGBA());
        //console.log(randomRGBA());
        break;
      case "tint":
        setColor(tintShade(color, 1));
        break;
      case "shade":
        setColor(tintShade(color, -1));
        break;
      default:
        if (color !== pickedColor) setColor(pickedColor);
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
