import React from "react";
import ShapeBox from "./ShapeBox";

function Box() {
  const BOX_DATA = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];
  return (
    <div>
      <ShapeBox data={BOX_DATA} />;
    </div>
  );
}

export default Box;
