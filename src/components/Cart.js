import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { BsFillTrash2Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Cart = () => {

  const { cart, totalPrice ,cleanCart} = useContext(CartContext);
  const navigate = useNavigate();
  function goBack() {
    navigate(-1); // Quay lại trang trước đó
  }
  const totalP = cart.reduce(
    (total, item) => total + item.originalPrice  * item.amount + 4.99,
    0
  );
  return (

    <div className="w-full h-auto min-h-[680px] bg-gray-100 pb-8">
   
    <div className="flex container justify-between mt-4 w-2/4  ml-52  mb-3"> 
    <div className="pt-20 text-3xl font-bold  " >     Cart   </div>
    <div
          onClick={cleanCart}
          className=" cursor-pointer pt-[87px] w-50  flex text-center align-center
           text-black mr-2 item-center  duration-150 hover:text-red-500 "
        >
         
          <BsFillTrash2Fill className="text-2xl  " />
      <span className="font-medium ml-1 mr-4  ">
        Remove
      </span>
        </div>

    
    </div>

  
      <div class="mx-auto max-w-[1210px] justify-center px-6 md:flex md:space-x-6 xl:px-0 container ">
      <div class="rounded-lg md:w-2/3">
      {cart.map((item) => {
          //   return <CartItem item={item} key={item.id } />;
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div class=" h-full rounded-lg border bg-white max-w-md p-6 shadow-md md:mt-6 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">${totalPrice } </p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">$4.99</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">${totalP.toFixed(0)} USD</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
 
      </div>

 
 
  
      <button className="" onClick={goBack}>Quay lại</button>
 
</div>
  );
};

export default Cart;
