import React, { useEffect } from "react";

function Toast({ onClose, message, delay }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [onClose, delay]);

  return (
    <div
      style={{
        position: "absolute",
        top: 160,
        right: 0,
        backgroundColor: "#ccc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <p style={{ padding: "30px" }}>{message}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700
        text-white px-2 rounded m-4 
        disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
}

export default Toast;
