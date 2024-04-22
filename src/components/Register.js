import React, { useState } from 'react'
import logo from '../assests/logo.webp'
import { Box, TextField } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import './register.css'
import { useDispatch } from 'react-redux'
import { registerUser } from './redux/action'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register() {
   const nav = useNavigate();
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    email: "",
    password: "",
    gender:""
  })

 const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
 };


  const handleRegister = async (e) => {
    if (!formData.name || !formData.email || !formData.password || !formData.gender) {
      toast.error("Please fill in all fields");
      return;
    }
      if (
       formData.password.length<4
      ) {
        toast.error("Password should contain 4 characters");
        return;
      }
    try {
      await dispatch(registerUser(formData));
      toast.success("Registration successful!");
      nav("/nav");
    } catch (error) {
      toast.error("Failed to register");
    }
  }
 
  const handlesignIn = () => {
    nav("/login")
  }
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
          <input
            type="password"
            placeholder="Enter Password"
            className="f1"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="gender">
            <label>Gender</label>
            <input
              type="radio"
              value="male"
              name="gender"
            
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            <label>Male</label>
            <input
              type="radio"
              value="female"
             
              name="gender"
           
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            <label>Female</label>
          </div>
          <div className="btn">
            <button className="up" onClick={handleRegister}>SignUp</button>
            <button className="in" onClick={handlesignIn}>
              SignIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register