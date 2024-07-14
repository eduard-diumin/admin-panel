import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-white.svg";
import { API_BASE_URL } from "../../constants/constant";
import { Link, useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { BsPatchCheck } from "react-icons/bs";
import "./ProductInfo.css";
import ProductsPreview from "../ProductsPreview/ProductsPreview";

const ProductInfo = () => {
  const { productId } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/${productId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [productId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product__info">
      <div className="product__info-head">
        <img src={logo} alt="logo" />
      </div>
      <div className="container">
        <div className="flex-block title-block">
          <Link to="/products-preview" element={<ProductsPreview />}>
            <IoArrowBackOutline />
          </Link>
          <h1>{data?.name}</h1>
        </div>
        <div className="flex-block top-block">
            <img src={data?.image} alt="img" />
            <div className="product__info-block">
                <p className="in-stock"><BsPatchCheck /> Є в наявності</p>
                <p className="price">{data?.price}<span>₴</span></p>
                <p className="quantity">Кількість: {data?.quantity}</p>
            </div>
        </div>
        <p className="descr">Опис <span>{data?.name}</span></p>
        <div className="product__info-descr">
            {data?.description}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
