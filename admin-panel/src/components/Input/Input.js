import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import "./Input.css";

const Input = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  showIcon,
  error,
}) => {
  const [inputType, setInputType] = useState(type);
  const handleClick = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <div className="input-field">
      <label className="label-input">
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          type={inputType}
          placeholder={placeholder}
        />
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
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Input;
