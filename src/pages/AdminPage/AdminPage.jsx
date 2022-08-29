import React from "react";
import "./AdminPage.css";

const AdminPage = () => {
  return (
    <div className="adminPage container">
      <div className="adminPage-1">
        <div className="adminPage-logo">
          <i class="bx bx-bowl-rice"></i>
          <h3>AdminPanel</h3>
        </div>
        <a style={{textDecoration:"None"}} href="#"><div className="adminPage-orders">
          <i class="bx bx-check-square"></i>
          <p>Заказы</p>
        </div></a>
        <a style={{textDecoration:"None"}} href="#"><div className="adminPage-orders">
        <i class='bx bxs-user-detail'></i>
          <p>Пользователи</p>
        </div></a>
      </div>
      <div className="adminPage-2"></div>
    </div>
  );
};

export default AdminPage;
