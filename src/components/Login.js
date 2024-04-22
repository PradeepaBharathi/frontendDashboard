import React, { useState } from "react";
import logo from "../assests/logo.webp";
import { Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "./redux/action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const nav = useNavigate();
  
 const dispatch = useDispatch();
 const [formData, setFormData] = useState({
   name: "",
   email: "",
   password: "",
  
 });

 const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handlelOGIN = async (e) => {
   if (
     !formData.name ||
     !formData.email ||
     !formData.password ) {
     toast.error("Please fill in all fields");
     return;
   }

   try {
     await dispatch(loginUser(formData));
     toast.success("Login successful!");
     nav("/nav");
   } catch (error) {
     toast.error("Invalid Email or Password");
   }
 };
 

     const handlesignUp = () => {
       nav("/");
     };
  return (
    <div className="container">
      <div className="reg-form">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="form">
          <input
            type="text"
            placeholder="Enter Name"
            className="f1"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="f1"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input type="password" placeholder="Enter Password"
          name="password"
            value={formData.password}
            onChange={handleChange}  className="f1" />

          <div className="btn">
            <button className="up" onClick={handlesignUp}>
              SignUp
            </button>
            <button className="in" onClick={handlelOGIN}>SignIn</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
