import React, { useState } from "react";
import Checkbox from "./Checkbox";

const Checkboxes = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Checkbox 1", checked: false },
    { id: 2, label: "Checkbox 2", checked: false },
    { id: 3, label: "Checkbox 3", checked: false },
    { id: 4, label: "Checkbox 4", checked: false },
  ]);
  const [selectAllDisabled, setSelectAllDisabled] = useState(false);
  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    );
    setCheckboxes(updatedCheckboxes);
    const allChecked = updatedCheckboxes.every((checkbox) => checkbox.checked);
    setSelectAllDisabled(allChecked);
  };
  const handleSelectAll = () => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: !selectAllDisabled,
    }));
    setCheckboxes(updatedCheckboxes);
    setSelectAllDisabled(!selectAllDisabled);
  };
  const selectedCheckboxes = checkboxes.filter((checkbox) => checkbox.checked);
  const selectedCount = selectedCheckboxes.length;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {checkboxes.map((checkbox) => (
        <Checkbox
          key={checkbox.id}
          label={checkbox.label}
          checked={checkbox.checked}
          onChange={() => handleCheckboxChange(checkbox.id)}
        />
      ))}
      <button onClick={handleSelectAll} disabled={selectAllDisabled}>
        {selectAllDisabled ? "Deselect All" : "Select All"}
      </button>
      <p>Selected: {selectedCount}</p>
      <ul>
        {selectedCheckboxes.map((checkbox) => (
          <li key={checkbox.id}>{checkbox.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Checkboxes;
