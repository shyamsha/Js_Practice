import React from "react";
import { motion } from "framer-motion";

function Bar({ name, ticketCount, color, height }) {
  return (
    <motion.div
      className="bar"
      initial={{ height: 0 }}
      animate={{ height: height }}
      exit={{ height: 0 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: color }}
    >
      <div className="tooltip">{`${name} - ${ticketCount}`}</div>
    </motion.div>
  );
}

export default Bar;
