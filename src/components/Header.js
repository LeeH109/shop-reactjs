import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";

import {CiUser} from "react-icons/ci";
import {BiSolidUser} from "react-icons/bi";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const {totalItem} = useContext(CartContext)
  // const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div className=" bg-black w-full h-14 fixed top-0 left-0 z-20 ">
      <div className="container flex justify-between m-auto h-full items-center   ">
      <a href="/"> <IoMdHome className="text-3xl   " color="white"/> </a>
     
    <div className="relative  ">
       <div className="flex  items-center">
       <Link to={`/login`} >
          <CiUser className="text-3xl font-bold mx-2 " color="white" />
        </Link>
       <Link to={`/cart`}>       

        <BsBag className="text-2xl" color="white"  /> 
           <h1 className=" absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs rounded-full"> {totalItem} </h1>      
        </Link>
       </div>
          {/* </div> */}
    </div>
        

       
      </div>
  
    </div>
  );
};

export default Header;
