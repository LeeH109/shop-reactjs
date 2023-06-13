import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { BsFillTrash2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
//

const Sidebar = () => {
 
  const { cart, cleanCart ,totalPrice ,totalItem} = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);

  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"} }
  w-full bg-white fixed top-0 h-full
  shadow-2xl md:x-[35vw] xl:max-w-[32vw] 
  transition-all duration-300 z-20 px-4
   lg:px-[35px]
  `}
    >
      <div
        className="flex items-center
     justify-between py-6 border-b"
      >
        <div className="uppercase text-sm font-semibold ">Shopping({totalItem})</div>

        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex 
      justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[450px] lg:h-[490px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id } />;
        })}{" "}
      </div>

      <div className=" bg-pink-200 flex w-full justify-between items-center px-2 mt-10">
        <div className=" ">
          <span>Total : </span> $ {totalPrice.toFixed(0)}
        </div>
        <div
          onClick={cleanCart}
          className=" cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl "
        >
          <BsFillTrash2Fill />
        </div>
      </div>

      {/*  */}

      <Link
        to="/cart"
        className="bg-gray-200 flex p-4 justify-center  
items-center text-primary w-full font-medium
"
      >
        {" "}
        View cart
      </Link>
      <Link
        to="/"
        className="bg-primary flex p-4 justify-center items-center text-center text-white w-full font-medium "
      >
        {" "}
        Checkout
      </Link>
    </div>
  );
};

export default Sidebar;
