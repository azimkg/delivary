import React, { useState } from "react";
import "./NavigationMenu.css";

const NavigationMenu = () => {
  const [selected, setSelected] = useState(0);

  const menus = [
    {
      text: "Home",
      name: "home-outline",
    },
    {
      text: "Profile",
      name: "person-outline",
    },
    {
      text: "Cart",
      name: "bag-handle-outline",
    },
    {
      text: "Add",
      name: "add-circle-outline",
    },
    {
      text: "Settings",
      name: "settings-outline",
    },
  ];

  return (
    <div className="navigation">
      <ul>
        {menus.map((val, index) => {
          return (
            <li
              onClick={() => setSelected(index)}
              key={index}
              className={index === selected ? "active" : ""}
            >
              <a href="#">
                <span className="icon">
                  <ion-icon name={val.name}></ion-icon>
                </span>
                <span className="text">{val.text}</span>
              </a>
            </li>
          );
        })}

        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default NavigationMenu;
