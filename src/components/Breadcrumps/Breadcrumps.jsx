import React from "react";

const Breadcrumps = () => {
  return (
    <div className="container">
      <div className="breadcrumps__block">
        <p className="breadcrumps">Главная</p>
        <span className="breadcrumps__slash">/</span>
        <p className="breadcrumps">Каталог</p>
        <span className="breadcrumps__slash">/</span>
        <p className="breadcrumps">Томаты на ветке</p>
      </div>
    </div>
  );
};

export default Breadcrumps;
