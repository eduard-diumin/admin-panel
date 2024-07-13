import React from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { IoTrashBin } from "react-icons/io5";
import "./Tabel.css";

function Tabel({ data }) {
  return (
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
              <IoTrashBin style={{ cursor: "pointer", fontSize: "20px" }} />
            </td>
          </tr>
        ))}
        <tr></tr>
      </tbody>
    </table>
  );
}

export default Tabel;
