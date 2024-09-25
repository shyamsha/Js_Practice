import React, { useState } from "react";
import Toast from "./Toast";

function Button() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700
        text-white font-bold py-2 px-4 rounded m-4 
        disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => setIsVisible(true)}
      >
        Toast
      </button>
      {isVisible && (
        <Toast
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
          message={"i am toast"}
          delay={5000}
        />
      )}
    </div>
  );
}

export default Button;
