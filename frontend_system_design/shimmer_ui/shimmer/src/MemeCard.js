import React from "react";

function MemeCard({ item }) {
  return (
    <div className="m-5 border-2 rounded-lg">
      <img className="w-48 h-48" src={item.url} alt={item.title} />
      <p>{item.author}</p>
    </div>
  );
}

export default MemeCard;
