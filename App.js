import React, { useState, useEffect } from "react";

const App = () => {
    const [time, setTime] = useState(1500);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (running && time > 0) {
            timer = setInterval(() => setTime((prev) => prev - 1), 1000);
        } else if (time === 0) {
            alert("Time's up!");
        }
        return () => clearInterval(timer);
    }, [running, time]);

    const startPause = () => setRunning(!running);
    const reset = () => { setTime(1500); setRunning(false); };

    return (
        <div>
            <h1>Pomodoro Timer</h1>
            <h2>{Math.floor(time / 60)}:{("0" + (time % 60)).slice(-2)}</h2>
            <button onClick={startPause}>{running ? "Pause" : "Start"}</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default App;
