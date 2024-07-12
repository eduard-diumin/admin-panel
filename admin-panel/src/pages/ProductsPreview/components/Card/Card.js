import React from "react";
import { BsCart4 } from "react-icons/bs";

import "./Card.css";

const Card = (props) => (
  <div key={props.id} className="product__card">
    <img src={props.image} alt="img" />
    <h4 className="product__card-title">{props.name}</h4>
    <div className="product__card-block">
      <span>{props.price} ₴</span>
      <span>Кількість: {props.quantity}</span>
    </div>
    <button className="product__card-btn">
      <BsCart4 />
      Готовий до відправки
    </button>
  </div>
);

export default Card;
