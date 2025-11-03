import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useSignUp() {
    const [formData, setFormData] = useState({
     username : "",
     email : "",
     password : "",
     confirmPassword : ""
  })

  const [errors,setErrors] = useState({})

  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name] : e.target.value})
  }
  // console.log(formData);
  const handleSubmit = (e)=>{
    e.preventDefault();
    const newErrors = {}

    // check if username is empty, if yes-> throw error
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    // check if email is empty or not valid, if yes-> throw error
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }
    // check if password is empty or less than 6 char, if yes-> throw error
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }else if(formData.password.length < 6 ){
      newErrors.password = "Password must be atleast 6 characters long";
    }
    // check if confirmPassword is empty or doesnot matches password, if yes-> throw error
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(newErrors)

    // If no errors, proceed to save data
     if (Object.keys(newErrors).length === 0) {
      const existingUsers =
        JSON.parse(localStorage.getItem("users")) || [];

      // prevent duplicate email registration
      const emailExists = existingUsers.some(
        (user) => user.email === formData.email
      );

      if (emailExists) {
        alert("This email is already registered. Please log in instead.");
        return;
      }

      // Save user details in localStorage
      const updatedUsers = [...existingUsers, formData];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("loggedInUser", JSON.stringify(formData));

      alert("Yeah, Signup and Login Successful!");
      navigate("/home");
    }
  }  
   
  return {errors, handleChange, handleSubmit };

}
