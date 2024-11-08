import { useState } from "react";
import { COLORS } from "./colors";
import Circles from "./Circles";
import "./styles.css";

const getRandomColor = () => {
  // to generate index numbers between 0 - colors.length -1
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
};

const Board = () => {
  const [circles, setCircles] = useState([]);

  const handleClick = (e) => {
    setCircles((prev) => {
      return [
        ...prev,
        {
          x: e.clientX,
          y: e.clientY,
          bgColor: getRandomColor(),
          id: +new Date(),
        },
      ];
    });
    console.log(circles);
  };

  return (
    <div className="board" onClick={handleClick}>
      <Circles circles={circles} />
    </div>
  );
};

export default Board;
