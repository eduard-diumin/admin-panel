import React from "react";
import "./Button.css";

const Button = ({ children, className, handleClickOpenAdd }) => (
  <button className={className} onClick={handleClickOpenAdd}>{children}</button>
);

export default Button;
