import React, { useEffect, useState } from "react";
import "./Details.css";
import vector from "../../assets/Vector.png";
import Breadcrumps from "../Breadcrumps/Breadcrumps";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const edit = useSelector((state) => state.food.edit);
  const dispatch = useDispatch();
  const [edited, setEdited] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setEdited(edit);
  }, [edit]);

  return edited ? (
    <div className="container">
      <Breadcrumps />
      <div className="details">
        <div className="details__block">
          <img src={edited.cover_pic} alt="image" className="details__photos" />
        </div>
        <div className="details__block-right">
          <h1 className="details__right-title">{edited.product_name}</h1>
          <p className="details__right-description">{edited.description}</p>
          <div className="details__right-footer">
            <div className="details__right-price">
              <span className="details__right-cost">{edited.price} сом</span>
            </div>
            <div className="details__cart-block">
              <img src={vector} alt="image" />
              <button className="details__cart">В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Details;
