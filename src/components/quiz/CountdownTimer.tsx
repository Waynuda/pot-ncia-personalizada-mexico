import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  minutes: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ minutes }) => {
  const [seconds, setSeconds] = useState(minutes * 60);

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="flex items-center justify-center gap-1">
      <div className="bg-foreground text-background rounded-lg px-3 py-2 text-2xl font-bold tabular-nums" style={{ animation: "countdownPulse 1s ease-in-out infinite" }}>
        {String(mins).padStart(2, "0")}
      </div>
      <span className="text-2xl font-bold text-foreground">:</span>
      <div className="bg-foreground text-background rounded-lg px-3 py-2 text-2xl font-bold tabular-nums" style={{ animation: "countdownPulse 1s ease-in-out infinite" }}>
        {String(secs).padStart(2, "0")}
      </div>
    </div>
  );
};

export default CountdownTimer;
