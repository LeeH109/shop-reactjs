import React, { createContext, useEffect, useState } from "react";
import { firestore } from "../firebaseConfig";
import { auth, analytics } from "../firebaseConfig";
import "firebase/compat/auth";
import firebase from "../firebaseConfig";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
//  const [isLogin ,setIsLogin] = useState(false);
  const currentUser1 = auth.currentUser;
  console.log("curent cart");
  console.log(currentUser1);


  useEffect(() => {
    const saveCartToFirestore = async (cartData) => {
      try {
        if (currentUser1) {
          console.log(currentUser1);
          const cartRef = firestore.collection("cart").doc(currentUser1.uid);
          console.log(cartRef);
          await cartRef.set({ cart: cartData });
          console.log("Thông tin giỏ hàng đã được lưu vào Firestore");
        }
      } catch (error) {
        console.error("Lỗi khi lưu thông tin giỏ hàng1:", error);
      }
    };
    if (cart) {
      saveCartToFirestore(cart);
    }
  }, [cart, currentUser1]);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      setCart([]);
      //  setIsLogin(false)
      
      alert("thanh công");
    } catch (error) {
      console.log(error);
    }
  };

  
  const handleLogin1 = () => {
    const userId = auth.currentUser.uid;
    const fetchData = async () => {
      try {
        const docRef = firestore.collection("cart").doc(userId);
        const users = await docRef.get();
        if (users.exists) {
          const data = users.data();
          console.log("datacart", data.cart);
          setCart(data.cart);
        } else {
          setCart([]);
          console.log("Document does not exist");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };
    fetchData();
    // setIsLogin(true)
  };

  // checkout
  const handleCheckout = (sum)=>{
    const userId = auth.currentUser;
    console.log('check');
    if(userId)
    {
      console.log('có');
      if(cart.length === 0)
     {
      alert('Giỏ hàng chưa có sản phẩm nào ! Vui lòng thêm sản phẩm !!!')

     }
      else 
      {
        alert('Thanh toán thành công ')
        setCart([]);
      }
    }
    else
    {
      alert('Vui lòng đăng nhập để thanh toán !!!');
    }
  }

  const addToCart = (product, id) => {
    // console.log('addToCart',product , id);
   
    const newItem = { ...product, amount: 1 };
   
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


  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };
  const decreaseAmount = (id) => {
 
    const cartItem = cart.find((item) => item.id === id);
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
    if (cartItem.amount < 2) {
      removeCart(id);
    } else {
      //
    }
  };

  // xóa 1 item
  const removeCart = (id) => {
    console.log(id);
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  // cl
  console.log(cart);

  // clean
  const cleanCart = () => {
    setCart([]);
  };
  //tien
  const totalItem = Array.isArray(cart)
    ? cart.reduce((total, item) => total + item.amount, 0)
    : 0;


  const totalPrice = Array.isArray(cart)
    ? cart.reduce((total, item) => total + item.originalPrice * item.amount, 0)
    : 0;
    const totalP = cart.reduce(
      (total, item) => total + item.originalPrice * item.amount + 4.99,
      0
    ).toFixed(0);
   
  
  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        cleanCart,
        removeCart,
        totalItem,
        increaseAmount,
        totalPrice,
        decreaseAmount,
        handleLogin1,
        handleLogout,
        handleCheckout,
        totalP
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
