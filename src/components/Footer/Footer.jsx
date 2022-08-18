import React from 'react';
import "../Footer/Footer.css"
import googlepay from "../Footer/Footer_img/googlepay.svg"
import applepay from "../Footer/Footer_img/ApplePay.svg"
import visa from "../Footer/Footer_img/Visa.svg"
import combo from "../Footer/footer-icons/Combined-Shape.svg"
import icon2 from "../Footer/footer-icons/Group 554.png"
import icon3 from "../Footer/footer-icons/Vector.png"
import icon4 from "../Footer/footer-icons/VK_white.png"
const Footer = () => {
    return (
        <div className='footer container' >
            {/* component1 */}
            
            <div className='footer-component1'>
            <div>
                <p className='footer_bold' >Помощь покупателю</p>
                <p>Доставка и оплата</p>
                <p>Возврат продукции</p>
                <p>Рецепты</p>
            </div>
            <div>
                <p className='footer_bold' >О  компании</p>
                <p>О нас</p>
                <p>Качество</p>
                <p>Контакты</p>
            </div>
            <div>
                <p className='footer_bold' >Партнеры</p>
                <p>Наши производители</p>
                <p>Анкета поставщика</p>
            </div>
            <div>
                <p className='footer_bold' >+996 707 777 777</p>
                <p className='footer_bold' >+996 707 777 777</p>
                <p>Ежедневно с 06:00 – 00:00</p>
            </div>


            </div>
            {/* component2 */}
            <div className='footer-component2'>
                <div>
                <p>© 2021-2022 — for you</p>
                </div>
                <div className='footer_oplata'>
                    <img src={visa} alt="" />
                    <img src={googlepay} alt="" />
                    <img src={applepay} alt="" />
                </div>
                <div className='footer_icons' >
                    <div>
                    <img src={combo} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon3} alt="" />
                    <img src={icon4} alt="" />
                    </div>
                  
<p>Политика конфиденциальности</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
