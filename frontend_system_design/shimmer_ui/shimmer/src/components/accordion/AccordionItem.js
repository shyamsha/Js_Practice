import React from "react";

function AccordionItem({ index, title, body, setIsOpen, isOpen }) {
  return (
    <div className="border border-black">
      <div
        className="font-bold p-2 bg-slate-200 flex justify-between cursor-pointer"
        onClick={() => setIsOpen()}
      >
        <span>{title}</span>
        <span>⬇️</span>
      </div>
      {isOpen && <div className="p-2">{body}</div>}
    </div>
  );
}

export default AccordionItem;
