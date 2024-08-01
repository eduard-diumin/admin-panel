import React from "react";
import { LuPlus } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../../../../components/Button/Button";

const Buttons = ({ handleClickOpenAdd }) => {
  return (
    <div className="btn-group">
      <Link to="/products-preview">
        <Button className="btn btn-white">
          <FaRegUser style={{ fontSize: "25px" }} />
          Preview
        </Button>
      </Link>
      <Button className="btn btn-white" handleClickOpenAdd={handleClickOpenAdd}>
        <LuPlus style={{ fontSize: "30px" }} />
        Add product
      </Button>
    </div>
  );
};

export default Buttons;
