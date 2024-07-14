import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-white.svg";
import Tabel from "./components/Tabel/Tabel";
import {API_BASE_URL} from '../../constants/constant'

import "./Products.css";
import Buttons from "./components/Buttons/Buttons";

function Products() {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_BASE_URL);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
