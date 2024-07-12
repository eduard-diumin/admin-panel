import React from "react";
import { BsCart4 } from "react-icons/bs";

import "./Card.css";

const Card = ({image, name, price, quantity, id }) => (
  <div  className="product__card">
    <img src={image} alt="img" />
    <h4 className="product__card-title">{name}</h4>
    <div className="product__card-block">
      <span>{price} ₴</span>
      <span>Кількість: {quantity}</span>
    </div>
    <button className="product__card-btn">
      <BsCart4 />
      Готовий до відправки
    </button>
  </div>
);

export default Card;
