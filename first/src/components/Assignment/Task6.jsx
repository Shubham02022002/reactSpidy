import { useState } from "react";
const Task6 = () => {
  const [timer, setTimer] = useState("");
  const showTimer = () => {
    let hours = `00`;
    let mins = `00`;
    let sec = `00`;
    let meridiem = "AM";
    let time = `${hours}:${mins}:${sec} ${meridiem}`;
    setTimer(time);
  };

  setInterval(showTimer, 1000);
  return (
    <div className="flex justify-center items-center gap-2 ">
      <h2>{timer}</h2>
      <button>Start</button>
      <button>Pause</button>
      <button>Reset</button>
    </div>
  );
};

export default Task6;
