import React from "react";
import "../Footer/Footer.css";
import elsom from "../../assets/image 1.svg";
import mbank from "../../assets/image 3.svg";
import visa from "../Footer/Footer_img/Visa.svg";
import combo from "../Footer/footer-icons/Combined-Shape.svg";
import icon2 from "../Footer/footer-icons/Group 554.png";
import icon3 from "../Footer/footer-icons/Vector.png";
import icon4 from "../Footer/footer-icons/VK_white.png";
const Footer = () => {
  return (
    <div className="footer ">
      <div className="container">
        <div className="footer-component1">
          <div>
            <p className="footer_bold">Помощь покупателю</p>
            <p>Доставка и оплата</p>
          </div>
          <div>
            <p className="footer_bold">О компании</p>
            <p>О нас</p>
            <p>Качество</p>
            <p>Контакты</p>
          </div>
          <div>
            <p className="footer_bold">+996 707 777 777</p>
            <p className="footer_bold">+996 707 777 777</p>
            <p>Azeldenbaev@gmail.com</p>
            <p>Ежедневно с 06:00 – 00:00</p>
          </div>
        </div>
        <div className="footer-component2">
          <div>
            <p>© 2021-2022 — for you</p>
          </div>
          <div className="footer_oplata">
            <img src={visa} alt="image" />
            <img src={elsom} width="40" alt="image" />
            <img src={mbank} width="65" alt="image" />
          </div>
          <div id="footer_icons">
            <div>
              <img src={combo} alt="image" />
              <img src={icon2} alt="image" />
              <img src={icon3} alt="image" />
              <img src={icon4} alt="image" />
            </div>

            <p className="confidential">Политика конфиденциальности</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
