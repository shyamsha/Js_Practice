import React, { useState } from "react";
import CHART_DATA from "./data.js";
import BarChart from "./BarChart.js";
import "./styles.css";

function ChartCustom() {
  const [showChart, setShowChart] = useState(false);
  return (
    <div className="container">
      <h1 className="text-xl font-bold mb-2">BarChart Customization</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
        onClick={() => setShowChart(!showChart)}
      >
        Show Chart
      </button>
      {showChart ? <BarChart data={CHART_DATA} /> : null}
    </div>
  );
}

export default ChartCustom;
