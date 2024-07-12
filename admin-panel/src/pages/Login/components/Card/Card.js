import React, { useState } from "react";
import axios from "axios";
import logo from "../../../../assets/logo-green.svg";
import "./Card.css";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";

const Card = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: value ? "" : "This field is required",
    });
    setAuthError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formIsValid = true;
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        formIsValid = false;
        newErrors[key] = "This field is required";
      }
    });

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5032/api/auth", formData); // Замените на ваш URL
      const { token } = response.data;
      localStorage.setItem("token", token);
      console.log("Token received and stored:", token);
    } catch (error) {
      if (error.response.status === 404) {
        setAuthError('Invalid user');
      } else {
        setAuthError('Authentication error'); 
      }
      console.error('Authentication error:', error);
    }
  };

  return (
    <div className="login__card">
      <img className="logo" src={logo} alt="logo" width="240px" />
      <form onSubmit={handleSubmit} method="POST">
        <Input
          id="login"
          name="login"
          value={formData.login}
          onChange={handleChange}
          placeholder="User Name"
          error={errors.login}
        />
        <Input
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          showIcon
          error={errors.password}
        />
        <Button type="submit" className="btn btn-green">
          Login
        </Button>
        {authError && <span className="error auth-error">{authError}</span>}
      </form>
    </div>
  );
};

export default Card;
