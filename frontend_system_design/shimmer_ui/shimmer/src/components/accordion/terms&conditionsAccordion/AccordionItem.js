import React from "react";

function AccordionItem({ index, title, body, setIsOpen, isOpen }) {
  return (
    <div className="border border-black">
      <div className="flex justify-between width">
        <div
          className="font-bold p-2 bg-slate-200 cursor-pointer"
          onClick={() => setIsOpen()}
        >
          <input className="mr-2" type="checkbox" />
          <span>{title}</span>
          <div className="flex justify-end align-center">
            <span>⬇️</span>
          </div>
        </div>
      </div>
      {isOpen && <div className="p-2">{body}</div>}
    </div>
  );
}

export default AccordionItem;
