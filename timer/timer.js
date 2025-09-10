import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function DigitalClock() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const incrementHours = () => {
    setHours((prev) => (prev + 1) % 24);
  };

  const decrementHours = () => {
    setHours((prev) => (prev === 0 ? 23 : prev - 1));
  };

  const incrementMinutes = () => {
    setMinutes((prev) => (prev + 1) % 60);
  };

  const decrementMinutes = () => {
    setMinutes((prev) => (prev === 0 ? 59 : prev - 1));
  };

  const formatTime = (value) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Digital Clock</h1>
        </div>

        <div className="flex items-center justify-center space-x-8">
          {/* Hours Control */}
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={incrementHours}
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 text-white"
              aria-label="Increment hours"
            >
              <ChevronUp size={24} />
            </button>

            <div className="text-6xl font-mono font-bold text-green-400 bg-black px-4 py-2 rounded border-2 border-green-400">
              {formatTime(hours)}
            </div>

            <button
              onClick={decrementHours}
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 text-white"
              aria-label="Decrement hours"
            >
              <ChevronDown size={24} />
            </button>

            <span className="text-gray-400 text-sm font-semibold">HOURS</span>
          </div>

          {/* Colon Separator */}
          <div className="text-6xl font-mono font-bold text-green-400 pb-8">
            :
          </div>

          {/* Minutes Control */}
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={incrementMinutes}
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 text-white"
              aria-label="Increment minutes"
            >
              <ChevronUp size={24} />
            </button>

            <div className="text-6xl font-mono font-bold text-green-400 bg-black px-4 py-2 rounded border-2 border-green-400">
              {formatTime(minutes)}
            </div>

            <button
              onClick={decrementMinutes}
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 text-white"
              aria-label="Decrement minutes"
            >
              <ChevronDown size={24} />
            </button>

            <span className="text-gray-400 text-sm font-semibold">MINUTES</span>
          </div>
        </div>

        {/* Current Time Display */}
        <div className="mt-8 text-center">
          <div className="text-sm text-gray-400 mb-2">Current Time:</div>
          <div className="text-2xl font-mono font-bold text-white bg-gray-700 px-6 py-3 rounded-lg inline-block">
            {formatTime(hours)}:{formatTime(minutes)}
          </div>
        </div>
      </div>
    </div>
  );
}
