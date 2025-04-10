import React from "react";
import "./styles.css";

function Checkboxes({ data }) {
  console.log(data);
  return (
    <>
      {data.map((node) => (
        <div key={Math.random() + node.id}>
          <input type="checkbox" />
          <span className="ml">{node.name}</span>
          <div className="checkbox">
            {node.children && node.children.length > 0 && (
              <Checkboxes data={node.children} />
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default Checkboxes;
