import React from "react";
import block from "../../assets/block.jpg";
import eda from "../../assets/eda.png";
import card from "../../assets/card.svg";
import "./Popular.css";

const Popular = () => {
  return (
    <div className="container">
      <div className="popular_block-top">
        <img src={block} alt="public-block" className="video-container" />
      </div>
      <div>
        <h2 className="popular_food-text">Популярные товары</h2>
      </div>
      <div className="popular_block-bottom">
        <div className="popular_card">
          <img src={eda} alt="card image" className="image_cards" />
          <div className="popular_bottom-text">
            <h2 className="cards_title-name">Яйца куриные</h2>
            <h3 className="cards_title-desc">Описание товара ... </h3>
            <span className="card_price-span">95 cом</span>
            <div className="card_position-card">
              <img src={card} alt="card" />
            </div>
          </div>
        </div>
        <div className="popular_card">
          <img src={eda} alt="card image" className="image_cards" />
          <div className="popular_bottom-text">
            <h2 className="cards_title-name">Яйца куриные</h2>
            <h3 className="cards_title-desc">Описание товара ... </h3>
            <span className="card_price-span">95 cом</span>
            <div className="card_position-card">
              <img src={card} alt="card" />
            </div>
          </div>
        </div>
        <div className="popular_card">
          <img src={eda} alt="card image" className="image_cards" />
          <div className="popular_bottom-text">
            <h2 className="cards_title-name">Яйца куриные</h2>
            <h3 className="cards_title-desc">Описание товара ... </h3>
            <span className="card_price-span">95 cом</span>
            <div className="card_position-card">
              <img src={card} alt="card" />
            </div>
          </div>
        </div>
        <div className="popular_card">
          <img src={eda} alt="card image" className="image_cards" />
          <div className="popular_bottom-text">
            <h2 className="cards_title-name">Яйца куриные</h2>
            <h3 className="cards_title-desc">Описание товара ... </h3>
            <span className="card_price-span">95 cом</span>
            <div className="card_position-card">
              <img src={card} alt="card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
