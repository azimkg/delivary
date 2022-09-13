import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumps = ({ item, loc }) => {
  return (
    <div className="container">
      <div className="breadcrumps__block">
        <Link to="/">
          <p className="breadcrumps">Главная</p>
        </Link>
        <span className="breadcrumps__slash">/</span>
        <p className="breadcrumps">{loc}</p>
        <span className="breadcrumps__slash">/</span>
        {item ? (
          <p key={item.id} className="breadcrumps">
            {item}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Breadcrumps;
