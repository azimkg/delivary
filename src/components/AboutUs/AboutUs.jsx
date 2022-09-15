import React, { useState } from "react";
import Breadcrumps from "../Breadcrumps/Breadcrumps";
import line from "../../assets/Line.png";
import "../AboutUs/AboutUs.css";
import NavigationMenu2 from "../NavigationMenu2/NavigationMenu2";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  return (
    <div>
      <div className="container">
        <div className="breadcrumps__block">
          <Link to="/">
            <p className="breadcrumps">Главная</p>
          </Link>
          <span className="breadcrumps__slash">/</span>
          <p className="breadcrumps">О нас</p>
        </div>
      </div>
      <div className="navigation_menu">
        <NavigationMenu2 />
      </div>
      <div className="about__main container">
        <div className="about__main-check">
          <div
            className={isActive ? "about__main-choice" : "actives"}
            onClick={() => {
              setFirst(!first);
              setSecond(false);
              setThird(false);
              setActive(!isActive);
              setActive2(isActive2);
              setActive3(!isActive3);
            }}
          >
            <p className="about__main-title ">О компании</p>
          </div>
          <div
            className={isActive2 ? "actives" : "about__main-choice"}
            onClick={() => {
              setSecond(!second);
              setFirst(false);
              setThird(false);
              setActive2(!isActive2);
              setActive(!isActive);
              setActive3(isActive3);
            }}
          >
            <p className="about__main-title">Миссия и ценности</p>
          </div>
          <div
            className={isActive3 ? "actives" : "about__main-choice"}
            onClick={() => {
              setThird(!third);
              setFirst(false);
              setSecond(false);
              setActive3(!isActive3);
              setActive2(!isActive2);
              setActive(isActive);
            }}
          >
            <p className="about__main-title">Наши производители</p>
          </div>
        </div>

        {first ? (
          <div className="about__main-content">
            <h1 className="about__content-title">4You Kitchen</h1>
            <p className="about__content-text">
              4YOU Kithen — это онлайн‑магазин с доставкой по графику
              натуральных продуктов произведенных в день доставки, а товары для
              дома и всё нужное для комфортного быта доставляем за 15 минут,
              благодаря размещеных в каждом районе дарксторов. У нас доставка
              всегда бесплатная.
            </p>
            <p className="about__content-text">
              Мы развиваем стремление к осознанному потреблению продуктов
              питания. Теперь нет необходимости закупаться впрок. Заказывайте
              только те продукты и в том количестве, которые вам необходимы
              сегодня – завтра.
            </p>
            <p className="about__content-text">
              Дарим время, за счет автоматической доставки часто покупаемых
              продуктов согласно гибкому графику, который можно редактировать в
              любое время и по своему желанию.
            </p>
          </div>
        ) : (
          first
        )}
        {second ? (
          <div className="about__main-content">
            <h1 className="about__content-title">4You Kitchen</h1>
            <p className="about__content-text">
              Доставляем людям натуральные здоровые продукты, честное отношение,
              а также дарим положительные эмоции. Мы получаем удовольствие от
              работы, а также помогаем нашим партнерам развиваться вместе с
              нами.
            </p>
            <h2 className="about__content-name">Ценности</h2>
            <h3 className="about__content-naming">Честность</h3>
            <p className="about__content-text">
              Мы развиваем стремление к осознанному потреблению продуктов
              питания. Теперь нет необходимости закупаться впрок. Заказывайте
              только те продукты и в том количестве, которые вам необходимы
              сегодня – завтра.
            </p>
            <h3 className="about__content-naming">Доверие</h3>
            <p className="about__content-text">
              Мы уважаем мнение наших покупателей и доверяем им. Мы верим, что
              наши сотрудники и партнеры выполняют работу с искреннем желанием
              помочь покупателям.
            </p>
            <h3 className="about__content-naming">Ответственность</h3>
            <p className="about__content-text">
              Мы поддерживаем хорошие взаимоотношения внутри коллектива, с
              партнерами и покупателями для достижения результата.
            </p>
            <p className="about__content-text">
              Дарим время, за счет автоматической доставки часто покупаемых
              продуктов согласно гибкому графику, который можно редактировать в
              любое время и по своему желанию.
            </p>
          </div>
        ) : (
          first
        )}
        {third ? (
          <div className="about__main-content">
            <p className="about__content-text">
              Доставляем людям натуральные здоровые продукты, честное отношение,
              а также дарим положительные эмоции. Мы получаем удовольствие от
              работы, а также помогаем нашим партнерам развиваться вместе с
              нами.
            </p>
            <h3 className="about__content-naming">Философия</h3>
            <p className="about__content-text">
              Мы развиваем стремление к осознанному потреблению продуктов
              питания. Теперь нет необходимости закупаться впрок. Заказывайте
              только те продукты и в том количестве, которые вам необходимы
              сегодня – завтра.
            </p>
            <h3 className="about__content-naming">Натуральность</h3>
            <p className="about__content-text">
              Мы уважаем мнение наших покупателей и доверяем им. Мы верим, что
              наши сотрудники и партнеры выполняют работу с искреннем желанием
              помочь покупателям.
            </p>
            <h3 className="about__content-naming">
              Безопасность и натуральная продукция
            </h3>
            <p className="about__content-text">
              Мы поддерживаем хорошие взаимоотношения внутри коллектива, с
              партнерами и покупателями для достижения результата.
            </p>
            <p className="about__content-text">
              Дарим время, за счет автоматической доставки часто покупаемых
              продуктов согласно гибкому графику, который можно редактировать в
              любое время и по своему желанию.
            </p>
          </div>
        ) : (
          first
        )}
      </div>
    </div>
  );
};

export default AboutUs;
