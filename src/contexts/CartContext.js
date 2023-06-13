import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //
  const addToCart = (product, id) => {
    // console.log('addToCart',product , id);
    // item mới
    const newItem = { ...product, amount: 1 };
    // kiểm tra có sp nào k ? nếu có id sp trong giỏ
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // true
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // tăng 

  const increaseAmount = (id)=>{
    const cartItem = cart.find((item)=> item.id=== id);
    addToCart(cartItem,id)
  }
  // giảm 
  const decreaseAmount = (id)=>{
    // console.log('giam sl' ,id);
    const cartItem = cart.find((item)=> item.id===id) ; 
     // true
     if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } 
    if(cartItem.amount < 2)
    {
      removeCart(id)
    }
    else {
      // 
    }
  }

// xóa 1 item 
const removeCart = (id)=>{
 console.log(id);
  const newCart = cart.filter((item)=>{
    return item.id !== id;
  })
  setCart(newCart)
}
// cl 
  console.log(cart);

  // clean 
const cleanCart = ()=>{
  setCart([])
}
  //tien
  const totalItem = cart.reduce((total, item) => total +  item.amount , 0);
  const totalPrice = cart.reduce((total, item) => total + item.originalPrice* item.amount , 0);
  return (
    <CartContext.Provider value={{ addToCart ,cart, cleanCart , removeCart
    ,totalItem , increaseAmount ,totalPrice, decreaseAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
