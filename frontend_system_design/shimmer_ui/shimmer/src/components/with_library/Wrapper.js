import React from "react";

function Wrapper({ children }) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="m-5 border-2 rounded-lg">
          <div className="w-48 h-48 bg-gray-200">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Wrapper;
