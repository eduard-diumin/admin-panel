import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-white.svg";
import Card from "./components/Card/Card";

import './ProductsPreview.css';

const ProductsPreview =() => {
  const [data, setData] = useState(null);

  useEffect(()=> {
    fetch('https://667dacdf297972455f6601f8.mockapi.io/products')
        .then(response => response.json())
        .then(data => setData(data));

    return () => {
        console.log('Clean effect');
    };
  }, []);

  return (
    <div className="products__preview">
      <a href="http://">
        <img src={logo} alt="logo" />
      </a>
      <div className="products__wrapper">
        {data?.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPreview;
