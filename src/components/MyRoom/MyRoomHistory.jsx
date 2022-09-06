import React, { useEffect, useState } from "react";
import "./MyRoom.css";
import MyRoomProgressBar from "./MyRoomProgressBar";

const MyRoomHistory = () => {
    //   ! START Test // 
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 20000);
  }, []);
//   ! END Test // 
  return (
    <>
      <div className="my_history-progressBar">
        <MyRoomProgressBar bgcolor={"#6a1b9a"} completed={completed}/>
      </div>
      <div className="my_history">
        <div className="my_history-card">
          <p className="my_history-date">08.06.2022</p>
          <div className="my_history-line"></div>
          <p>манты х 1</p>
          <p>плов х 2</p>
          <p>куурдак х 1</p>
          <p>боорсок х 1</p>
          <div className="my_history-line"></div>
          <h3>1400 сом</h3>
        </div>
        <div className="my_history-card">
          <p className="my_history-date">09.06.2022</p>
          <div className="my_history-line"></div>
          <p>манты х 1</p>
          <p>плов х 2</p>
          <p>куурдак х 1</p>
          <p>боорсок х 1</p>
          <div className="my_history-line"></div>
          <h3>1135 сом</h3>
        </div>
        <div className="my_history-card">
          <p className="my_history-date">15.07.2022</p>
          <div className="my_history-line"></div>
          <p>манты х 1</p>
          <p>плов х 2</p>
          <p>куурдак х 1</p>
          <p>боорсок х 1</p>
          <div className="my_history-line"></div>
          <h3>1200 сом</h3>
        </div>
        <div className="my_history-card">
          <p className="my_history-date">08.06.2022</p>
          <div className="my_history-line"></div>
          <p>манты х 1</p>
          <p>плов х 2</p>
          <p>куурдак х 1</p>
          <p>боорсок х 1</p>
          <div className="my_history-line"></div>
          <h3>1400 сом</h3>
        </div>
        <div className="my_history-card">
          <p className="my_history-date">09.06.2022</p>
          <div className="my_history-line"></div>
          <p>манты х 1</p>
          <p>плов х 2</p>
          <p>куурдак х 1</p>
          <p>боорсок х 1</p>
          <div className="my_history-line"></div>
          <h3>1135 сом</h3>
        </div>
        <div className="my_history-card">
          <p className="my_history-date">15.07.2022</p>
          <div className="my_history-line"></div>
          <p>манты х 1</p>
          <p>плов х 2</p>
          <p>куурдак х 1</p>
          <p>боорсок х 1</p>
          <div className="my_history-line"></div>
          <h3>1200 сом</h3>
        </div>
      </div>
    </>
  );
};

export default MyRoomHistory;
