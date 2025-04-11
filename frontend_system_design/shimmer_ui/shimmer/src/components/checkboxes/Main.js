import React from "react";
import Checkboxes from "./Checkboxes";
import { checkboxesData } from "./data";

function Main() {
  const [checked, setChecked] = React.useState({});
  return (
    <div className="center">
      <Checkboxes
        checkboxesData={checkboxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}

export default Main;
