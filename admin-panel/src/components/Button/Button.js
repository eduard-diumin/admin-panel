import React from "react";
import "./Button.css";

const Button = ({ children, className }) => (
  <button className={className}>{children}</button>
);

export default Button;
