import React, { useMemo, useState, useEffect } from "react";
import classNames from "classnames";
import "./styles.css";
// create shape based on 2D data
// 1 = empty box, 0 = render nothing
// box render like 3 rows and 3 columns
// we can select the box by clicking on it change background color green
// deselect in oder of selection
// disable any interaction with the box during the deselection
function ShapeBox({ data }) {
  const boxes = useMemo(() => data.flat(Infinity), [data]);
  const [selected, setSelected] = useState(new Set());
  const [unloadBoxes, setUnloadBoxes] = useState(false);
  const timerRef = React.useRef(null);
  const handleClick = (e) => {
    const index = e.target.dataset.index;
    const status = e.target.dataset.status;
    if (!index || status === "hidden" || selected.has(index) || unloadBoxes)
      return;
    setSelected((prev) => new Set(prev.add(index)));
  };
  const countOfVisibleBoxes = useMemo(() => {
    return boxes.reduce((acc, box) => {
      if (box === 1) {
        acc++;
      }
      return acc;
    }, 0);
  }, [boxes]);

  const unload = () => {
    // remove boxes from the selected set every 500ms
    setUnloadBoxes(true);
    const keys = Array.from(selected.keys());
    const removeNextKey = () => {
      if (keys.length) {
        const currentKey = keys.shift();
        setSelected((prev) => {
          const updatedKeys = new Set(prev);
          updatedKeys.delete(currentKey);
          return updatedKeys;
        });
        timerRef.current = setTimeout(removeNextKey, 500);
      } else {
        setUnloadBoxes(false);
        clearTimeout(timerRef.current);
      }
    };
    timerRef.current = setTimeout(removeNextKey, 100);
  };
  useEffect(() => {
    //selected.size>=countOfVisibleBoxes
    if (selected.size >= countOfVisibleBoxes) {
      // unload the selected boxes
      unload();
    }
  }, [selected]);

  return (
    <div className="boxes" onClick={handleClick}>
      {boxes.map((box, index) => {
        const status = box === 1 ? "visible" : "hidden";
        const isSelected = selected.has(index.toString());
        return (
          <div
            key={`${box}-${index}`}
            className={classNames("box", status, isSelected && "selected")}
            data-index={index}
            data-status={status}
          />
        );
      })}
    </div>
  );
}

export default ShapeBox;
