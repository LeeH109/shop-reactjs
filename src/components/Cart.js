import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { BsFillTrash2Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { firestore } from "../firebaseConfig";
import { auth, analytics } from "../firebaseConfig";
import "firebase/compat/auth";
import { SidebarContext } from "../contexts/SidebarContext";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Cart = () => {
  const {  setIsOpen } = useContext(SidebarContext);


  
  const { cart , totalPrice, cleanCart, handleCheckout,totalP } = useContext(CartContext);
  const navigate = useNavigate();
  function goBack() {
    navigate(-1); 
  }
 

  return (
    <div className="w-full h-auto min-h-[680px] bg-gray-100 pb-8">
      <div className="flex container justify-between ml-[14vw] w-2/4 mt-4  mb-3 max-[600px]:ml-[0vw] max-[600px]:w-full 
      max-[800px]:w-2/3   md:ml-[0vw] md:w-2/3 sm:ml-[0vw] sm:w-full  xl:w-2/4 xl:ml-[14vw] ">
        <div className="pt-20 text-3xl font-bold  "> Cart </div>
        <div
          onClick={cleanCart}
          className=" cursor-pointer pt-[87px] w-50  flex text-center align-center
           text-black mr-2 item-center  duration-150 hover:text-red-500 xl:mr-[4vw]
         "
        >
          <BsFillTrash2Fill className="text-2xl mr-1   " />
          <span className="font-medium  mr-[3vw] max-[600px]:mr-[12vw] md:mr-[-3vw] 
          sm:mr-[-24vw] ">Remove</span>
        </div>
      </div>

      <div class="mx-auto max-w-[1100px] justify-center px-6 md:flex md:space-x-6 xl:px-0 container ">
        <div class="rounded-lg md:w-2/3 ">
          {cart.map((item) => {
            //   return <CartItem item={item} key={item.id } />;
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div class=" h-full rounded-lg border bg-white max-w-md p-6 shadow-md md:mt-6 md:w-1/3
         sm:mt-10 sm:m-auto  max-[600px]:mt-5 
        ">
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Subtotal</p>
            <p class="text-gray-700">${totalPrice} </p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-700">Shipping</p>
            <p class="text-gray-700">$4.99</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold">${totalP} USD</p>
              <p class="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button onClick={ handleCheckout }  class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
          Check out
          </button>
        </div>
      </div>

      <div
          className="flex mt-5 mb-10 items-center justify-start cursor-pointer md:my-12 lg:my-12 sm:my-12 "
          onClick={goBack} >
          <AiOutlineArrowLeft className="mx-1" />
          <button className="uppercase font-medium">Quay lại</button>
        </div>
    </div>
  );
};

export default Cart;
