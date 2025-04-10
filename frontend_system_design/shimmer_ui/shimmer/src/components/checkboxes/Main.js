import React from "react";
import Checkboxes from "./Checkboxes";
import { data } from "./data";

function Main() {
  const [checked, setChecked] = React.useState({});
  return (
    <div className="center">
      <Checkboxes data={data} checked={checked} setChecked={setChecked} />
    </div>
  );
}

export default Main;
