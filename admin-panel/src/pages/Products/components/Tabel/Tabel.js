import React, { useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { IoTrashBin } from "react-icons/io5";
import {API_BASE_URL} from '../../../../constants/constant'
import "./Tabel.css";
import DeleteProductModal from "../Modal/DeleteProductModal";
import axios from "axios";

function Tabel({ data, setData }) {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [error, setError] = useState(null);

  const handleClickOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const handleConfirm = async () => {
    try {
      await axios.delete(`${API_BASE_URL}/${selectedRow.id}`);
      setData((prevData) => prevData.filter(product => product.id !== selectedRow.id));
      handleClose();
    } catch (error) {
      console.error('Error deleting row:', error);
      setError('Failed to delete the product.');
    }
    handleClose();
  };
  return (
    <>
    {error && <div>Error: {error}</div>}
      <table className="tabel">
        <thead>
          <tr>
            <th>
              <span>
                ID <BiSortAlt2 />
              </span>
            </th>
            <th>
              <span>
                Category <BiSortAlt2 />
              </span>
            </th>
            <th>
              <span>
                Name <BiSortAlt2 />
              </span>
            </th>
            <th>
              <span>
                Quantity <BiSortAlt2 />
              </span>
            </th>
            <th>
              <span>
                Price (₴) <BiSortAlt2 />
              </span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.category}</td>
              <td>{row.name}</td>
              <td>{row.quantity}</td>
              <td>{row.price}</td>
              <td>
                <MdEdit
                  style={{
                    cursor: "pointer",
                    marginRight: "10px",
                    fontSize: "20px",
                  }}
                />
                <IoTrashBin onClick={() => handleClickOpen(row)} style={{ cursor: "pointer", fontSize: "20px" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteProductModal
        open={open}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        title="Confirm Delete"
        description="Are u sure you want to delete this product?"
      />
    </>
  );
}

export default Tabel;
