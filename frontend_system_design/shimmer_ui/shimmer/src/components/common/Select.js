import React from "react";

function Select({ optionData, placeHolder }) {
  // console.log(options);

  return (
    <select onChange={(e) => console.log(e.target.value)}>
      <option value="1">{placeHolder}</option>
      {optionData.map((option) => {
        return <option value={option.value}>{option.label}</option>;
      })}
    </select>
  );
}

export default Select;
