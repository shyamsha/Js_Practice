import React, { useState } from "react";

function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const toggleValue = (value) => {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  };
  return [value, toggleValue];
}

export default useToggle;
