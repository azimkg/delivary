import React from "react";
import "../Footer/Footer.css";
import elsom from "../../components/Footer/Footer_img/elsom.svg";
import mbank from "../../assets/image 3.svg";
import visa from "../Footer/Footer_img/Visa.svg";
import combo from "../Footer/footer-icons/Combined-Shape.svg";
import icon3 from "../Footer/footer-icons/Vector.png";
import tiktok from "../Footer/Footer_img/tiktok.svg";
import footerlogo from "./Footer_img/foryoulogofooter.svg";

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
            <p className="p2021-2022">
              © 2021-2022 —{" "}
              <img className="footerlogo" src={footerlogo} alt="footerlogo" />
            </p>
          </div>
          <div className="footer_oplata">
            <img src={visa} alt="image" />
            <img src={elsom} width="40" alt="image" />
            <img src={mbank} width="65" alt="image" />
          </div>
          <div id="footer_icons">
            <div>
              <a href="https://instagram.com/kitchen4you.kg?igshid=ZDU1ZDhlY2E=">
                <img src={icon3} alt="image" />
              </a>
              <a href="https://www.tiktok.com/@kitchen4you.kg?_t=8VrXwqfEbeT&_r=1">
                <img className="tiktok" src={tiktok} alt="image" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-component3">
          <p>Политика конфедециальности</p>{" "}
          <p>
            made by: <a href="devs.kg">Devs.kg</a>
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
