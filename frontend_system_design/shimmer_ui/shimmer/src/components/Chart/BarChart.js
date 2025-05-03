import React from "react";
import Bar from "./Bar";
import { motion } from "framer-motion";

function BarChart({ data }) {
  const maxTicketCount = Math.max(...data.map((item) => item.ticketCount));
  return (
    <motion.div
      className="chart-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bar-chart">
        {data.map((item) => (
          <Bar
            key={item.id}
            {...item}
            height={`${(item.ticketCount / maxTicketCount) * 100}%`}
          />
        ))}
      </div>
      <div className="y-axis-label">Number of tickets</div>
      <div className="x-axis-label">Departments</div>
    </motion.div>
  );
}

export default BarChart;
