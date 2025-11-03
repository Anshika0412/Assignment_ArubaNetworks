import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin'

export default function Login() {
  const { errors, loginError, handleChange, handleSubmit } = useLogin();

  return (
    <div className="w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto mt-16 sm:mt-24 p-6 sm:p-10 border-2 border-green-700 rounded-2xl bg-white shadow-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 sm:gap-8 text-lg sm:text-xl font-normal"
      >
        {/* Email */}
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            autoComplete="email"
            className="w-full p-2 rounded-lg border border-green-500 outline-none focus:border-2 focus:border-green-700"
            onChange={handleChange}
          />
          {errors.email && ( <p className="text-red-500 text-sm mt-1">{errors.email} </p> )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            autoComplete="current-password"
            className="w-full p-2 rounded-lg border border-green-500 outline-none focus:border-2 focus:border-green-700"
            onChange={handleChange}
          />
          {errors.password && ( <p className="text-red-500 text-sm mt-1">{errors.password} </p> )}
        </div>

        {/* Login Error */}
        {loginError && (
          <p className="text-red-500 text-sm text-center">{loginError}</p>
        )}

        {/* Submit + Link */}
        <div className="text-center font-normal">
          <button type="submit"
            className="bg-green-600 text-white rounded-lg px-8 py-2 hover:bg-green-700 transition-all w-full sm:w-auto">
            Login
          </button>
          <p className="text-base mt-4"> Not a Member Yet?  
            <Link to="/" className="font-bold text-green-600 ml-1">
               Sign Up
            </Link> here 
          </p>
        </div>
      </form>
    </div>
  );
}
