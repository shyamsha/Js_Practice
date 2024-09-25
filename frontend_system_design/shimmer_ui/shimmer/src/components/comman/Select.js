import React from "react";

function Select({ options, values }) {
  return (
    <select>
      <option value="1">Select</option>
      <option value={values}>{options}</option>
      {/* one problem options are not coming single value 
      try to solve
       */}
    </select>
  );
}

export default Select;
