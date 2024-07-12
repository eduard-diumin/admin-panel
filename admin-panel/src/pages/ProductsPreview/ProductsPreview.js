import React from "react";
import logo from "../../assets/logo-white.svg";
import Card from "./components/Card/Card";

import './ProductsPreview.css';

const ProductsPreview =() => {
  const data = [
    {
      image: "https://loremflickr.com/640/480/cats",
      name: "Generic Granite Chips",
      price: "503.00",
      quantity: "7",
      description:
        "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      id: "1",
    },
    {
      image: "https://loremflickr.com/640/480/business",
      name: "Incredible Metal Chips",
      price: "671.00",
      quantity: "9",
      description:
        "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      id: "2",
    },
    {
      image: "https://loremflickr.com/640/480/sports",
      name: "Handmade Wooden Tuna",
      price: "929.00",
      quantity: "6",
      description:
        "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      id: "3",
    },
    {
      image: "https://loremflickr.com/640/480/abstract",
      name: "Ergonomic Steel Computer",
      price: "488.00",
      quantity: "1",
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      id: "4",
    },
    {
      image: "https://loremflickr.com/640/480/people",
      name: "Tasty Frozen Fish",
      price: "742.00",
      quantity: "8",
      description:
        "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      id: "5",
    },
    {
      image: "https://loremflickr.com/640/480/abstract",
      name: "Refined Concrete Sausages",
      price: "325.00",
      quantity: "9",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      id: "6",
    },
  ];

  return (
    <div className="products__preview">
      <a href="http://">
        <img src={logo} alt="logo" />
      </a>
      <div className="products__wrapper">
        {data.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPreview;
