import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { BsFillTrash2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
//

const Sidebar = () => {
 
  // const { cart, cleanCart ,totalPrice ,totalItem} = useContext(CartContext);
  const { isOpen , handleClose } = useContext(SidebarContext);

  return (
    <div
      className={`${ isOpen ? "right-0" : "-right-full"} }
  w-full bg-white fixed top-0 h-full z-20 lg:max-w-[35vw] 
  `}
    >
     {/* shadow-2xl 
   md:x-[40vw] 
  xl:max-w-[40vw] xl:right-1/4
  transition-all duration-300 z-20 px-4
   lg:px-[35px]   sm:right-3/4 sm:x-[40vw] */}
      <div
        className="flex items-center
     justify-between py-6 border-b"
      >
       

        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex 
      justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      

     

      {/*  */}

    
    </div>
  );
};

export default Sidebar;
