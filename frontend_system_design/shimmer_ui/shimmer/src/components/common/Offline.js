import React from "react";

function Offline() {
  return (
    <div
      style={{
        display: "flex",
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
      }}
    >
      <div>
        <p>Your device appears to be offline</p>
        <p>Please check you internet connection and try reloading the page</p>
      </div>
    </div>
  );
}

export default Offline;
