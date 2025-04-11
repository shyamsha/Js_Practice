import React from "react";
import { checkboxesData as data } from "./data";
import "./styles.css";

function Checkboxes({ checkboxesData, checked, setChecked }) {
  // console.log(checkboxesData, "c");
  const handleChange = (isChecked, node) => {
    // console.log(checkboxesData);
    setChecked((prev) => {
      const newChecked = { ...prev, [node.id]: isChecked };
      updateChildren(newChecked, isChecked, node);
      data.forEach((parent) => updateParent(newChecked, parent));
      console.log(data);
      return newChecked;
    });
  };
  // This function updates the checked state of parent and all children nodes recursively checked
  const updateChildren = (newChecked, isChecked, node) => {
    node.children?.forEach((child) => {
      newChecked[child.id] = isChecked;
      child.children && updateChildren(newChecked, isChecked, child);
    });
  };
  // if  all child's is checked, then check parent automatically
  const updateParent = (newChecked, node) => {
    // !fixme: if parent is not checked, if check all children
    if (!node.children) return newChecked[node.id] || false;
    const allChildrenChecked = node.children.every((child) =>
      updateParent(newChecked, child)
    );
    newChecked[node.id] = allChildrenChecked;
    return allChildrenChecked;
  };
  return (
    <>
      {checkboxesData.map((node) => (
        <div key={node.id}>
          <input
            type="checkbox"
            checked={checked[node.id] || false}
            onChange={(e) => handleChange(e.target.checked, node)}
          />
          <span className="ml">{node.name}</span>
          <div className="checkbox">
            {node.children && node.children.length > 0 && (
              <Checkboxes
                checkboxesData={node.children}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default Checkboxes;
