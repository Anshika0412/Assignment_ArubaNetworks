import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function useLogin() {

  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    email : "",
    password : ""
  })

  const [errors, setErrors] = useState({});          // for empty or invalid input field check
  const [loginError, setLoginError] = useState("");  // for login details check

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    setLoginError("");

    //Checks for empty input fields
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }
     if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    // Stop here if there are validation errors
    if (Object.keys(newErrors).length > 0) return;

    // Fetch users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email & password match
    const validUser = existingUsers.find( (user) =>
            user.email === formData.email && user.password === formData.password
    );

    // if valid user then stores current user(loggedInUser) in localStorage
    if (validUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(validUser)); 
      navigate("/home");
    } else {
      setLoginError("Invalid email or password. Please try again.");
    }
  };

 return {errors,loginError,handleChange,handleSubmit};
}
