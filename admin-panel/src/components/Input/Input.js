import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import "./Input.css";

const Input = ({ showIcon, type, placeholder }) => {
  const [inputType, setInputType] = useState(type);
  const handleClick = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <label className="label-input">
      <input type={inputType} placeholder={placeholder} />
      {showIcon && (
        <span onClick={handleClick} style={{ cursor: "pointer" }}>
          {inputType === "password" ? (
            <IoMdEye size="34px" color="green" />
          ) : (
            <IoMdEyeOff size="34px" color="green" />
          )}
        </span>
      )}
    </label>
  );
};

export default Input;
