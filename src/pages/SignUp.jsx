import React from "react";
import { Link } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";

export default function SignUp() {
  const { errors, handleChange, handleSubmit } = useSignUp();

  return (
    <div className="w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto mt-16 p-6 border-2 border-green-700 rounded-2xl shadow-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 text-lg sm:text-xl font-normal"
      >
        {/* Username */}
        <div>
          <input type="text"
            name="username"
            placeholder="Enter your Name"
            className="w-full p-2 rounded-lg border border-green-500 outline-none focus:border-2 focus:border-green-700"
            onChange={handleChange} 
          />
          { errors.username && ( <p className="text-red-500 text-sm mt-1">{errors.username} </p> ) }
        </div>

        {/* Email */}
        <div>
          <input type="email"
            name="email"
            placeholder="Enter your Email"
            className="w-full p-2 rounded-lg border border-green-500 outline-none focus:border-2 focus:border-green-700"
            onChange={handleChange}
          />
          {errors.email && ( <p className="text-red-500 text-sm mt-1">{errors.email} </p> )}
        </div>

        {/* Password */}
        <div>
          <input type="password"
            name="password"
            placeholder="Enter your Password"
            autoComplete="new-password"
            className="w-full p-2 rounded-lg border border-green-500 outline-none focus:border-2 focus:border-green-700"
            onChange={handleChange}
          />
          {errors.password && ( <p className="text-red-500 text-sm mt-1">{errors.password} </p> )}
        </div>

        {/* Confirm Password */}
        <div>
          <input type="password"
            name="confirmPassword"
            placeholder="Confirm your Password"
            autoComplete="new-password"
            className="w-full p-2 rounded-lg border border-green-500 outline-none focus:border-2 focus:border-green-700"
            onChange={handleChange}
          />
          {errors.confirmPassword && ( <p className="text-red-500 text-sm mt-1"> {errors.confirmPassword} </p> )}
        </div>

        {/* Submit */}
        <div className="text-center font-normal">
          <button type="submit"
            className="bg-green-600 text-white rounded-lg px-8 py-2 mt-2 hover:bg-green-700 transition-all w-full sm:w-auto">
            Sign Up
          </button>

          <p className="text-base mt-4"> Already a Member? 
            <Link to="/login" className="font-bold text-green-600 ml-1">
              Login
            </Link> here
          </p>
        </div>
      </form>
    </div>
  );
}
