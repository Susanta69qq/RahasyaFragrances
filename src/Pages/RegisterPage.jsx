import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ClockLoader } from "react-spinners";

function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    setisLoading(true);
    try {
      const response = await axios.post(
        "https://rahasyafragrances.onrender.com/signup",
        {
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          email: e.target.email.value,
          password: e.target.password.value,
        }
      );
      navigate("/login");
    } catch (error) {
      console.log(
        "User already registered, please try another email address!",
        error
      );
    } finally {
      setisLoading(false);
    }
  };
  return (
    <div className="h-screen bg-black">
      <Navbar />
      <div className="mainContent flex justify-center text-white items-end max-sm:items-center h-full py-[2vw]">
        <div className="flex flex-col items-center">
          <h1 className="text-[4vw] max-sm:text-[8vw] font-[font4]">
            Create account
          </h1>
          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-[1.5vw] max-sm:gap-[3vw] w-[40vw] max-sm:w-[70vw] mt-[1.5vw] max-sm:mt-[3vw]"
            action=""
            method="post"
          >
            <input
              className="bg-transparent border border-white px-[1.5vw] py-[.65vw] 
                placeholder:text-[.9vw] max-sm:placeholder:text-[2.5vw] placeholder:font-[font3] max-sm:text-[4vw]"
              type="text"
              name="firstName"
              placeholder="First name"
              required="true"
            />
            <input
              className="bg-transparent border border-white px-[1.5vw] py-[.65vw]
                placeholder:text-[.9vw] max-sm:placeholder:text-[2.5vw] placeholder:font-[font3] max-sm:text-[4vw]"
              type="text"
              name="lastName"
              placeholder="Last name"
              required="true"
            />
            <input
              className="bg-transparent border border-white px-[1.5vw] py-[.65vw] 
                placeholder:text-[.9vw] max-sm:placeholder:text-[2.5vw] placeholder:font-[font3] max-sm:text-[4vw]"
              type="email"
              name="email"
              placeholder="Email"
              required="true"
            />
            <input
              className="bg-transparent border border-white px-[1.5vw] py-[.65vw]
                placeholder:text-[.9vw] max-sm:placeholder:text-[2.5vw] placeholder:font-[font3] max-sm:text-[4vw]"
              type="password"
              name="password"
              placeholder="Password"
              required="true"
            />
            <div className="flex flex-col justify-center items-center gap-[1vw] max-sm:gap-[2vw] max-sm:mt-[3vw]">
              <button
                type="submit"
                className="bg-white text-black px-[1.2vw] max-sm:px-[2.5vw] py-[.5vw] max-sm:py-[1vw] rounded-md"
              >
                {isLoading ? (
                  <ClockLoader color="#000" loading={isLoading} size={20} />
                ) : (
                  "Create"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterPage;
