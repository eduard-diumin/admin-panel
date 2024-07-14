import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-white.svg";
import Tabel from "./components/Tabel/Tabel";
import axios from "axios";
import ModalEdit from "./components/ModalEdit/ModalEdit";
import { API_BASE_URL } from "../../constants/constant";

import "./Products.css";
import Buttons from "./components/Buttons/Buttons";

function Products() {
  const [data, setData] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_BASE_URL);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClickOpenAdd = () => {
    setSelectedRow(null);
    setIsEditMode(false);
    setOpenForm(true);
  };

  const handleClickOpenEdit = (row) => {
    setSelectedRow(row);
    setIsEditMode(true);
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setSelectedRow(null);
  };

  const handleSaveForm = async (product) => {
    try {
      if (isEditMode) {
        await axios.put(`${API_BASE_URL}/${product.id}`, product);
        setData((prevData) =>
          prevData.map((item) => (item.id === product.id ? product : item))
        );
      } else {
        const response = await axios.post(API_BASE_URL, product);
        setData((prevData) => [...prevData, response.data]);
      }
      handleCloseForm();
    } catch (error) {
      console.error("Error saving product:", error);
      setError("Failed to save the product.");
    }
  };

  return (
    <div className="products">
      <img src={logo} alt="logo" />
      <Buttons handleClickOpenAdd={handleClickOpenAdd} />
      <h1>Products</h1>
      <Tabel
        data={data}
        setData={setData}
        handleClickOpenEdit={handleClickOpenEdit}
      />
      <ModalEdit
        open={openForm}
        handleClose={handleCloseForm}
        handleSave={handleSaveForm}
        selectedProduct={selectedRow}
        isEditMode={isEditMode}
      />
      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default Products;
