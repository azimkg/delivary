import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationMenu2.css";

function NavigationMenu3() {
  const location = useLocation();

  const menus = [
    {
      icon: <i className="bx bx-home-alt-2"></i>,
      name: "Домой",
      link: "/",
    },
    {
      icon: <i className="bx bx-purchase-tag-alt"></i>,
      name: "Акции",
      link: "/sales",
    },

    {
      icon: <i className="bx bx-shopping-bag"></i>,
      name: "Заказы",
      link: "/cart",
    },
    {
      icon: <i className="bx bx-group"></i>,
      name: "О нас",
      link: "/about",
    },
    {
      icon: <i className="bx bx-user"></i>,
      name: " Кабинет",
      link: "/my",
    },
  ];

  return (
    <div className="navigation">
      <ul>
        {menus.map((val, index) => {
          return (
            <li
              key={index}
              className={location.pathname !== val.link ? "" : "active"}
            >
              <Link to={val.link}>
                <div className="icon">{val.icon}</div>
                <div className="name">{val.name}</div>
              </Link>
            </li>
          );
        })}
        {/* <div className="menu-bg" /> */}
      </ul>
    </div>
  );
}

export default NavigationMenu3;
