import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationMenu2.css";

function NavigationMenu2() {
  const location = useLocation();

  const menus = [
    {
      icon: <i className="bx bx-home-alt-2"></i>,
      name: "Домой",
      path: "/",
    },
    {
      icon: <i className="bx bx-purchase-tag-alt"></i>,
      name: "Акции",
      path: "/sales",
    },

    {
      icon: <i className="bx bx-shopping-bag"></i>,
      name: "Заказы",
      path: "/cart",
    },
    {
      icon: <i className="bx bx-group"></i>,
      name: "О нас",
      path: "/about",
    },
    {
      icon: <i className="bx bx-user"></i>,
      name: " Кабинет",
      path: "/enter",
    },
  ];

  return (
    <div className="navigation">
      <ul>
        {menus.map((val, index) => {
          return (
            <li
              key={index}
              className={location.pathname === val.path ? "active" : ""}
            >
              <Link to={val.path}>
                <div className="icon">{val.icon}</div>
                <div className="name">{val.name}</div>
              </Link>
            </li>
          );
        })}
        <div className="menu-bg" />
      </ul>
    </div>
  );
}

export default NavigationMenu2;
