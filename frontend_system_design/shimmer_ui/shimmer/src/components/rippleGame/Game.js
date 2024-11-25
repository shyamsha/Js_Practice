import React, { Fragment, useMemo, useState } from "react";
import { getRandomColors } from "../../utils/randomColors";
import _shuffle from "lodash/shuffle";
import Box from "./Box";
import "./style.css";
const TOTAL_BOXES = 12;
function Game() {
  const [activeColors, setActiveColors] = useState([]);
  const [revealedColors, setRevealedColors] = useState(new Set());

  // grid of boxes render colors
  // we need 12 boxes
  // 2 boxes have same color to make pair
  // render ui for game
  // divide boxes into 3 columns
  // 4 boxes in each column

  const colors = getRandomColors(TOTAL_BOXES / 2);
  //wll give array of 6 colors
  /**
   * render game skelton with boxes
   * render boxes have logic of color rendering
   * handle interactions with boxes
   * game over with reset functionality
   */
  const boxes = useMemo(() => {
    const pairedColors = [...colors, ...colors];
    const shuffledColors = _shuffle(pairedColors);
    // const shuffledColors = pairedColors.sort(() => Math.random() - 0.5);
    const pairedBoxes = shuffledColors.map((color, index) => {
      return {
        id: index,
        bgColor: color,
      };
    });
    return pairedBoxes;
  }, [TOTAL_BOXES]);

  const handleClick = (currentSelectedColor) => {
    /**
     * if current color is black
     * is this my first selection
     * if yes
     * 1. set current color to store return
     * else if second selection
     * 1. check if current color is same as store color
     * 2 we need to store and reveal rest of game
     * 3. if not same reset both to white
     */
    if (activeColors.length === 0) {
      setActiveColors([currentSelectedColor]);
      return;
    }
    if (activeColors[0] === currentSelectedColor) {
      setRevealedColors((prev) => new Set(prev.add(currentSelectedColor)));
      setActiveColors([]);
    } else {
      setTimeout(() => {
        setActiveColors([]);
      }, 500);
    }
  };

  return (
    <div className="game-container">
      <div className="game-boxes">
        {boxes.map((box) => {
          return (
            <Fragment key={box.id}>
              <Box
                handleClick={handleClick}
                {...box}
                activeColors={activeColors}
                revealedColors={revealedColors}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Game;
