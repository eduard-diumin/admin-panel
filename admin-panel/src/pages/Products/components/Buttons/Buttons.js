import React from "react";
import Button from "../../../../components/Button/Button";
import { LuPlus } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import "./Buttons.css";
import { Link } from "react-router-dom";

const Buttons = () => (
  <div className="btn-group">
    <Link to="/products-preview">
      <Button className="btn btn-white">
        <FaRegUser style={{ fontSize: "25px" }} />
        Preview
      </Button>
    </Link>
    <Button className="btn btn-white">
      <LuPlus style={{ fontSize: "30px" }} />
      Add product
    </Button>
  </div>
);

export default Buttons;
