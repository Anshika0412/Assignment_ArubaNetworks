import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    alert("You’ve been logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      {user ? (
        <>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Welcome, 
            <span className="text-green-600 break-words">
              {user.username}
            </span> 
            to Aruba Networks!
          </h1>
          <p className="text-base sm:text-lg mb-8">
            You are now logged in successfully.
          </p>

          <button
            onClick={handleLogout}
            className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition-all" >
            Logout
          </button>
        </>
      ) : (
        <p className="text-gray-600 text-lg">Redirecting...</p>
      )}
    </div>
  );
}
