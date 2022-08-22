import "./NavigationMenu.css";
import React, { useState } from "react";

const NavigationMenu = () => {
  const [selected, setSelected] = useState(0);

  const menus = [
    {
      text: "Home",
      name: "home-outline",
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
      text: "profile",
      name: "profile",
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
              className={index === selected ? "active" : "list"}
            >
              <span className="icon">
                <ion-icon name={val.name}></ion-icon>
              </span>
              <span className="text">{val.text}</span>
            </li>
          );
        })}

        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default NavigationMenu;
