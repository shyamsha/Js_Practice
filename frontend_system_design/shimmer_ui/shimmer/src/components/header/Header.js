import React, { useState } from "react";
import Select from "../common/Select";
import { SEARCH_CONTRACT } from "../../utils/strings";

function Header() {
  let optionData = [
    { label: "option1", value: "option123" },
    { label: "option2", value: "option123" },
    { label: "option3", value: "option123" },
  ];
  let optionData2 = [
    { label: "option1", value: "option123" },
    { label: "option2", value: "option123" },
    { label: "option3", value: "option123" },
  ];
  const [selectValue, setSelectValue] = useState("");

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
          <Select
            optionData={optionData}
            selectValue={selectValue}
            placeHolder={SEARCH_CONTRACT}
          />
          <Select
            optionData={optionData2}
            selectValue={selectValue}
            placeHolder={"Search Contract2"}
          />
          {/* <Select options={optionData} values={valueData} /> */}
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
