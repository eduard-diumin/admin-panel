import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-white.svg";
import Tabel from "./components/Tabel/Tabel";

import "./Products.css";
import Buttons from "./components/Buttons/Buttons";

function Products() {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    fetch("https://667dacdf297972455f6601f8.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => setData(data));

    return () => {
      console.log("Clean effect");
    };
  }, []);

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
