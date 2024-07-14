import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-white.svg";
import Card from "./components/Card/Card";

import './ProductsPreview.css';
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../constants/constant";

const ProductsPreview =() => {
  const [data, setData] = useState(null);

  useEffect(()=> {
    fetch(API_BASE_URL)
        .then(response => response.json())
        .then(data => setData(data));
  }, []);

  return (
    <div className="products__preview">
      <img src={logo} alt="logo" />
      <div className="products__wrapper">
        {data?.map((product) => (
          <Link
            className="product__link"
            key={product.id}
            to={`/products-preview/${product.id}`}
          >
            <Card {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsPreview;
