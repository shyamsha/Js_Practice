import React, { useRef, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [formatTime, setFormatTime] = useState("00:00");
  const [isPause, setIsPause] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const pauseCount = useRef(0);
  const timerId = useRef();
  const start = () => {
    timerId.current = setInterval(() => {
      setTime((prev) => prev + 1);
      setIsStart(true);
      setIsReset(false);
      setIsPause(false);
    }, 1000);
  };
  const stop = () => {
    clearInterval(timerId.current);
    setIsStart(false);
    setIsPause(false);
  };
  const reset = () => {
    setIsStart(false);
    setIsStart(false);
    setIsReset(true);
    setTime(0);
    clearInterval(timerId.current);
  };
  const formatTimeLapse = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    let lapse = `${minutes}:${seconds}`;
    setFormatTime(lapse);
  };
  const pause = () => {
    setIsPause(true);
    setIsStart(false);
    clearInterval(timerId.current);
    pauseCount.current++;
    if (pauseCount.current >= 2) {
      reset();
      formatTimeLapse(time);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>{time}</h1>
      <h1>Time lapse: {formatTime}</h1>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={start}
          disabled={isStart}
        >
          Start
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
          onClick={pause}
        >
          Pause
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
          onClick={stop}
        >
          Stop
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
          onClick={reset}
        >
          Reset
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
          onClick={() => formatTimeLapse(time)}
        >
          Format Time
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
