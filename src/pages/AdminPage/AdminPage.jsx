import React, { useState } from "react";
import UsersList from "../../components/UsersList/UsersList";
import "./AdminPage.css";

const AdminPage = () => {
  const [users, setUsers] = useState(false);
  function open() {
    setUsers(true);
  }
  return (
    <div className="adminPage container">
      <div className="adminPage-1">
        <div className="adminPage-logo">
          <i class="bx bx-bowl-rice"></i>
          <h3>AdminPanel</h3>
        </div>
        <a style={{ textDecoration: "None" }} href="#">
          <div className="adminPage-orders">
            <i class="bx bx-check-square"></i>
            <p>Заказы</p>
          </div>
        </a>
        <a style={{ textDecoration: "none", cursor: "pointer" }}>
          <div onClick={open} className="adminPage-orders">
            <i class="bx bxs-user-detail"></i>
            <p>Пользователи</p>
          </div>
        </a>
      </div>
      <div className="adminPage-2">{users ? <UsersList /> : null}</div>
    </div>
  );
};

export default AdminPage;
