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
    navigate(-1); // Quay lại trang trước đó
  }
  // const totalP = cart.reduce(
  //   (total, item) => total + item.originalPrice * item.amount + 4.99,
  //   0
  // );


  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   // Lấy dữ liệu từ Firestore
  //   const user = auth.currentUser;
  //   if (user) {
  //       const fetchData = async () => {
  //   try {
  //     const docRef = firestore.collection('cart').doc(user.uid);
  //     const users = await docRef.get();
  //     if (users.exists) {
  //       const data = users.data();
  //       console.log(data);
  //       setData(data);
  //     } else {
  //       console.log('Document does not exist');
  //     }
  //   } catch (error) {
  //     console.error('Error getting document:', error);
  //   }
  // };
  //     fetchData();
  //   }
  // }, []);
  // console.log("data của cart");
  // console.log(data.cart);

  return (
    <div className="w-full h-auto min-h-[680px] bg-gray-100 pb-8">
      <div className="flex container justify-between mt-4 w-2/4  ml-[12vw]  mb-3">
        <div className="pt-20 text-3xl font-bold  "> Cart </div>
        <div
          onClick={cleanCart}
          className=" cursor-pointer pt-[87px] w-50  flex text-center align-center
           text-black mr-2 item-center  duration-150 hover:text-red-500 "
        >
          <BsFillTrash2Fill className="text-2xl  " />
          <span className="font-medium ml-1 mr-1  ">Remove</span>
        </div>
      </div>

      <div class="mx-auto max-w-[1100px] justify-center px-6 md:flex md:space-x-6 xl:px-0 container ">
        <div class="rounded-lg md:w-2/3">
          {cart.map((item) => {
            //   return <CartItem item={item} key={item.id } />;
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div class=" h-full rounded-lg border bg-white max-w-md p-6 shadow-md md:mt-6 md:w-1/3
         sm:mt-10 sm:m-auto 
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
