import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "./accordion.css";

function AccordionItem({ title, content }) {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [chevronRotate, setChevronRotate] = useState("accordion__icon");
  const contentRef = useRef(null);
  const toggle = () => {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${contentRef.current.scrollHeight}px`
    );
    setChevronRotate(
      active === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  };
  return (
    <div className="accordion__section">
      <button className={`accordion ${active}`} onClick={toggle}>
        <p className="accordion__title">{title}</p>
        <Chevron className={chevronRotate} width={8} fill={"#777"} />
      </button>
      <div
        className="accordion__content"
        style={{ maxHeight: height }}
        ref={contentRef}
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}

export default AccordionItem;
