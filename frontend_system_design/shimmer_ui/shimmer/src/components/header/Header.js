import React from "react";
import Select from "../comman/Select";

function Header() {
  let optionData = ["option1", "option2", "option3", "option4", "option5"];
  let valueData = ["value1", "value2", "value3", "value4", "value5"];
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "1rem",
        }}
      >
        {/* parent container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* select box parent container */}
          <Select options={optionData} values={valueData} />
          <Select options={optionData} values={valueData} />
          <Select options={optionData} values={valueData} />
          {/* select box parent container */}
        </div>
        <div>Contracts</div>
        <div>
          {/* this is another component */}
          <div>open in word</div>
          <div>open in excel</div>
        </div>

        {/* parent container */}
      </div>
    </div>
  );
}

export default Header;
