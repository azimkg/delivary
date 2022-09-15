import React, { useContext } from "react";
import { authContext } from "../../context/authContext";
import "./MyRoom.css";

const MyRoomPref = () => {
  return (
    <div className="preff">
      <div className="pref">
        <h3>Привет, User</h3>
        <div>
          <div className="my_profile">
            <img
              className="my_photo"
              src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
            <h3>Name Name</h3>
          </div>
          <div className="pref_line"></div>
          <div className="pref-1">
            <div className="nameAndEmail">
              <h4 className="pref-grey">Имя</h4>
              <h4 className="pref-black pref_userName">UserName</h4>
              <h4 className="pref-grey">адрес электронной почты</h4>
              <h4 className="pref-black">userEmail@mail.com</h4>
            </div>
          </div>
        </div>
        <div className="pref_line"></div>
        <div className="pref-1">
          <div className="phoneNumber">
            <h4 className="pref-grey">Телефон</h4>
            <h4 className="pref-black">0 777 777 777</h4>
          </div>
        </div>
        <div className="pref_line"></div>
        <div className="pref-1">
          <div className="password">
            <h4 className="pref-grey">Пароль</h4>
            <h4 className="pref-black">******</h4>
          </div>
        </div>
        <div className="pref_line"></div>
        <div>
          <button className="pref-btn">Редактировать</button>
        </div>
      </div>
    </div>
  );
};

export default MyRoomPref;
