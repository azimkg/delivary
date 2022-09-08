import React from "react";
import "./UsersList.css";

const UsersList = () => {
  return (
    <div className="container">
      <h2>Список пользователей</h2>
      <div className="customers_list">
        <div className="customers_info container">
          <h5>Фото</h5>
          <h5>Имя</h5>
          <h5>Номер телефона</h5>
          <h5>Электронный адрес</h5>
          <h5>Бюджет заказов</h5>
        </div>
        <div className="customers_line"></div>
        <div className="customers_all_info container">
          <img
            className="customers_photo"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <h5>John Snow</h5>
          <h5>0777888888</h5>
          <h5>johnsnow@gmail.com</h5>
          <h5>10500</h5>
        </div>
        <div className="customers_line"></div>
        <div className="customers_all_info container">
          <img
            className="customers_photo"
            src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <h5>Sara Snow</h5>
          <h5>0777777777</h5>
          <h5>sarasnow@gmail.com</h5>
          <h5>7500</h5>
        </div>
        <div className="customers_line"></div>
        <div className="customers_all_info container">
          <img
            className="customers_photo"
            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <h5>Bob Marley</h5>
          <h5>0555 666 777</h5>
          <h5>bob@gmail.com</h5>
          <h5>27900</h5>
        </div>
        <div className="customers_line"></div>
        <div className="customers_all_info container">
          <img
            className="customers_photo"
            src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <h5>Lady Gaga</h5>
          <h5>0222 56 56 45</h5>
          <h5>gaga@gmail.com</h5>
          <h5>31400</h5>
        </div>
        <div className="customers_line"></div>
        <div className="customers_all_info container">
          <img
            className="customers_photo"
            src="https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <h5>Richard Lionheart</h5>
          <h5>0555 90 87 98</h5>
          <h5>richard@gmail.com</h5>
          <h5>25000</h5>
        </div>
        <div className="customers_line"></div>
        <div className="customers_all_info container">
          <img
            className="customers_photo"
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <h5>Anna Dance</h5>
          <h5>0777 888 999</h5>
          <h5>anna@gmail.com</h5>
          <h5>2900</h5>
        </div>
        <div className="customers_line"></div>
        <div className="customers_all_info container">
          <img
            className="customers_photo"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <h5>John Snow</h5>
          <h5>0777888888</h5>
          <h5>johnsnow@gmail.com</h5>
          <h5>10500</h5>
        </div>
        <div className="customers_line"></div>
        <div className="customers_all_info container">
          <img
            className="customers_photo"
            src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <h5>Sara Snow</h5>
          <h5>0777777777</h5>
          <h5>sarasnow@gmail.com</h5>
          <h5>7500</h5>
        </div>
        <div className="customers_line"></div>
        <div className="customers_all_info container">
          <img
            className="customers_photo"
            src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <h5>Lady Gaga</h5>
          <h5>0222 56 56 45</h5>
          <h5>gaga@gmail.com</h5>
          <h5>31400</h5>
        </div>
        <div className="customers_line"></div>
        <div className="customers_all_info container">
          <img
            className="customers_photo"
            src="https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <h5>Richard Lionheart</h5>
          <h5>0555 90 87 98</h5>
          <h5>richard@gmail.com</h5>
          <h5>25000</h5>
        </div>
        <div className="customers_line"></div>
      </div>
    </div>
  );
};

export default UsersList;
