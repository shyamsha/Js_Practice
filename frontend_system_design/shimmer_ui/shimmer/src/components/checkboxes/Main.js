import React from "react";
import Checkboxes from "./Checkboxes";
import { data } from "./data";

function Main() {
  return (
    <div className="center">
      <Checkboxes data={data} />
    </div>
  );
}

export default Main;
