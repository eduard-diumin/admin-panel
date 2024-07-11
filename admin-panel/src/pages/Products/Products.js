import React from "react";
import logo from "../../assets/logo-white.svg";
import Tabel from "./components/Tabel/Tabel";

import "./Products.css";
import Buttons from "./components/Buttons/Buttons";

function Products() {
  const data = [
    { id: 0, category: "PC", name: "Lenovo Y50-70", quantity: 5, price: '25,000.00' },
    { id: 1, category: "Clothes", name: "Nike M Nk Df Acd21", quantity: 22, price: '4,000.00' },
    { id: 2, category: "Plumbing", name: "CERSANIT MITO 17", quantity: 1337, price: '5,000.00' },
  ];

  return (
    <div className="products">
      <a href="http://">
        <img src={logo} alt="logo" />
      </a>
      <Buttons />
      <h1>Products</h1>
      <Tabel data={data} />
    </div>
  );
}

export default Products;
