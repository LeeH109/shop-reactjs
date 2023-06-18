import React, { useContext, useState } from "react";

import firebase from "../firebaseConfig";
import "firebase/compat/auth";
import { useNavigate } from "react-router-dom";
import Toast from "../hook/messageToast";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Login = () => {

  const { handleLogin1 } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //ẩn
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email);

    try {
      // firebase

      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("login successful");
      navigate("/");
      handleLogin1()
    } catch (error) {
      setShowToast(true);

      console.log("sai");
      console.error(error);
    }
  };
  const handleClose = () => {
    setShowToast(false);
  };

  
  return (
    <div>
      <div className="relative">
        <div style={{ display: showToast === true ? "block" : "none" }}>
          {showToast && (
            <div
              className="absolute right-0  items-center justify-between rounded-t-lg 
        
     mx-2
       text-primary-700 mt-20   border-l-3  
        "
            >
              <Toast message="đăng nhập thất bại" onClose={handleClose} />
            </div>
          )}
        </div>
      </div>
      <div class="h-screen flex">
        <div class="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
          <div>
            <h1 class="text-white font-bold text-4xl font-sans">Login</h1>
            <p class="text-white mt-1">
              The most popular peer to peer lending at SEA
            </p>
            <button
              type="submit"
              class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              Read More
            </button>
          </div>
        </div>
        <div class="flex w-1/2 justify-center items-center bg-white ">
          <form class="bg-white" onSubmit={handleLogin}>
            <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
            <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>

              {/*  */}
              <input
                class="pl-2 outline-none border-none"
                type="Email"
                name=""
                id=""
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>

              {/* password  */}
              <input
                class="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>

            <button
              type="submit"
              class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">
              <Link to={`/register`}> Register ?</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
