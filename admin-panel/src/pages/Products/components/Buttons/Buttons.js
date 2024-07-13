import React from "react";
import Button from "../../../../components/Button/Button";
import { LuPlus } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import './Buttons.css'

const Buttons = () => (
    <div className="btn-group">
      <Button className="btn btn-white">
        <FaRegUser style={{fontSize: "25px"}} />
        Preview
      </Button>
      <Button className="btn btn-white">
        <LuPlus style={{fontSize: "30px"}}/>
        Add product
      </Button>
    </div>
)

export default Buttons;
