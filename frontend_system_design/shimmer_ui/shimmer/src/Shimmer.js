import React from "react";

function Shimmer() {
  return Array(24)
    .fill(0)
    .map((_, i) => (
      <div key={i} className="m-5 border-2 border-black rounded-lg">
        <div className="w-48 h-48 bg-gray-200 animate-pulse" />
      </div>
    ));
}

export default Shimmer;
