import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ClockLoader } from "react-spinners";

function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const response = await axios.post(
        "https://rahasyafragrances.onrender.com/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("authToken", response.data.token);
      navigate("/");
    } catch (error) {
      console.log("Login credentials not correct, login failed", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-screen bg-black">
      <Navbar />
      <div className="mainContent flex justify-center text-white items-end h-full py-[2vw]">
        <div className="flex flex-col items-center">
          <h1 className="text-[4vw] font-[font4]">Login</h1>
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-[1.5vw] w-[40vw] mt-[1.5vw]"
            action=""
            method="post"
          >
            <input
              className="bg-transparent border border-white px-[1.5vw] py-[.65vw] 
                placeholder:text-[.9vw] placeholder:font-[font3]"
              type="email"
              name="email"
              placeholder="Email"
              required="true"
            />
            <input
              className="bg-transparent border border-white px-[1.5vw] py-[.65vw]
                placeholder:text-[.9vw] placeholder:font-[font3]"
              type="password"
              name="password"
              placeholder="Password"
              required="true"
            />
            <div className="flex flex-col justify-center items-center gap-[1vw]">
              <h4 className="uppercase text-[.9vw] tracking-[1.5px]">
                forgot your password?
              </h4>
              <button
                type="submit"
                className="bg-white text-black px-[1.2vw] py-[.5vw] rounded-md"
              >
                {isLoading ? (
                  <ClockLoader
                    color="#000"
                    loading={isLoading}
                    size={30}
                  />
                ) : (
                  "Sign in"
                )}
              </button>
              <a href="/signup">
                <h4 className="uppercase text-[1vw] tracking-[1.5px]">
                  create account
                </h4>
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
