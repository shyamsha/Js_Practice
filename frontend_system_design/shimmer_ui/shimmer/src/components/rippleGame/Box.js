import React, { useState, useEffect } from "react";

const DEFAULT_BG_COLOR = "white";
function Box({ handleClick, bgColor, activeColors, revealedColors }) {
  const isRevealedColor = revealedColors.has(bgColor);
  const [backgroundColor, setBackgroundColor] = useState(
    isRevealedColor ? bgColor : DEFAULT_BG_COLOR
  );
  const onClickColorHandler = () => {
    //prevent multiple time click on same color
    if (backgroundColor !== DEFAULT_BG_COLOR) {
      return;
    }
    setBackgroundColor(bgColor);
    handleClick(bgColor);
  };
  useEffect(() => {
    if (!isRevealedColor && activeColors.length === 0) {
      setBackgroundColor(DEFAULT_BG_COLOR);
    }
  }, [isRevealedColor, activeColors]);
  return (
    <>
      <div
        className="game-box"
        onClick={onClickColorHandler}
        style={{ backgroundColor: backgroundColor }}
      ></div>
    </>
  );
}

export default Box;
