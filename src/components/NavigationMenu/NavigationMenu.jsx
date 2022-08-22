import React from 'react';
import './NavigationMenu.css'

const NavigationMenu = () => {
    // const list = document.querySelectorAll('.list')
    // function activeLink(params) {
    //     list.forEach((item)=>
    //     item.classList.remove('active'));
    //     this.classList.add('active');
    // }
    
    
    return (
        <div className="navigation">
            <ul>
                <li className='list active'>
                    <a href="#">
                        <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
                        <span className='text'>Home</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="#">
                        <span className='icon'><ion-icon name="person-outline"></ion-icon></span>
                        <span className='text'>Profile</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="#">
                        <span className='icon'><ion-icon name="bag-handle-outline"></ion-icon></span>
                        <span className='text'>Cart</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="#">
                        <span className='icon'><ion-icon name="add-circle-outline"></ion-icon></span>
                        <span className='text'>Add</span>
                    </a>
                </li>
                <li className='list'>
                    <a href="#">
                        <span className='icon'><ion-icon name="settings-outline"></ion-icon></span>
                        <span className='text'>Settings</span>
                    </a>
                </li>
                <div className="indicator"></div>
            </ul>
        </div>
    );
};

export default NavigationMenu;