import { useState, useEffect } from "react";
import * as S from "./styled";

const Pixel = ({
  size,
  pickedColor,
  backgroundColor,
  clearSketchPad,
  showingGrid,
}) => {
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
  const getGridColor = ([r, g, b]) =>
    r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
  const [color, setColor] = useState(backgroundColor);
  const [bgColor, setBgColor] = useState(backgroundColor);
  const [isShowingGrid, setIsShowingGrid] = useState(false);

  useEffect(() => {
    if (color === bgColor) setColor(backgroundColor);
    setBgColor(backgroundColor);
  }, [backgroundColor]);

  useEffect(() => {
    if (color !== backgroundColor) setColor(backgroundColor);
  }, [clearSketchPad]);

  let gridColor = getGridColor(getRGBA(color));
  useEffect(() => {
    setIsShowingGrid(!isShowingGrid);
    gridColor = getGridColor(getRGBA(color));
  }, [showingGrid]);

  const handleHover = () => {
    //todo: track if left button is pressed to draw
    switch (pickedColor) {
      case "eraser":
        if (color !== backgroundColor) setColor(backgroundColor);
        break;
      case "rainbow":
        setColor(randomRGBA());
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
      showingGrid={isShowingGrid}
      gridColor={gridColor}
    />
  );
};

export default Pixel;
