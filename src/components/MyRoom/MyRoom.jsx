import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavigationMenu2 from "../NavigationMenu2/NavigationMenu2";
import NavigationMenu3 from "../NavigationMenu2/NavigationMenu3";
import "./MyRoom.css";
import MyRoomHistory from "./MyRoomHistory";
import MyRoomPref from "./MyRoomPref";
import MyRoomProblem from "./MyRoomProblem";

const MyRoom = () => {
  const [history, setHistory] = useState(true);
  const [pref, setPref] = useState(false);
  const [problem, setProblem] = useState(false);
  function open() {
    setHistory(true);
    setPref(false);
    setProblem(false);
  }

  return (
    <div className="my container">
      <div className="navigation_menu">
        <NavigationMenu2 />
      </div>
      <div className="breadcrumps__block">
        <Link to="/">
          <p className="breadcrumps">Главная</p>
        </Link>
        <span className="breadcrumps__slash">/</span>
        <p className="breadcrumps">Личный кабинет</p>
      </div>
      <div className="my_column">
        <MyRoomHistory />
      </div>
    </div>
  );
};

export default MyRoom;
