import React, { useContext, useEffect, useState } from "react";

import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import { CartContext } from "../contexts/CartContext";
import Skeleton from "react-loading-skeleton";
import firebase, { firestore } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import "firebase/compat/auth";
const Home = () => {
  const { products } = useContext(ProductContext);
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  };

  //  filter
  const filterProducts = products.filter((product) => {
    return product.category === "1" || product.category === "2";
  });

  // console.log(filterProducts);
  //
  const [filterSearch, setFilterSearch] = useState("");
  const [result, setResult] = useState([]);
  //
  const handleSearch = (event) => {
    event.preventDefault();
    setFilterSearch(event.target.value);
    console.log(filterSearch);
    //
    const filterSearchProducts = products.filter((product) => {
      return product.title.includes(filterSearch);
    });
    setResult(filterSearchProducts);
    //  console.log(result);
    console.log(filterSearchProducts);
  };

  // phân trang

  // const visible = showAll ? products : products.slice(0,14);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Thay đổi số này tùy theo yêu cầu của bạn

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [displayName, setDisplayName] = useState("");
  useEffect(() => {
    console.log("use");
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        console.log(user.email);
        console.log(user.uid);
        setDisplayName(user.email);
      } else {
        // User is signed out
        setDisplayName("Khách");
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);
  // const [cart, setCart] = useState([]);
  // const currentUser = auth.currentUser;
  // useEffect(() => {
    // Hàm lưu thông tin giỏ hàng vào Firestore
  //   const saveCartToFirestore = async (cartData) => {
  //     try {
  //       if (currentUser) {
  //         console.log(currentUser);
     
  //         const cartRef = firestore.collection('cart').doc(currentUser.uid);
  //         console.log(cartRef);
  //         await cartRef.set(
  //           { cart : cartData }
  //           );
  //         console.log('Thông tin giỏ hàng đã được lưu vào Firestore');
  //       }
  //     } 
      
  //     catch (error) {
  //       console.error('Lỗi khi lưu thông tin giỏ hàng:', error);
  //     }
  //   };

  //   // Gọi hàm lưu thông tin giỏ hàng khi giỏ hàng thay đổi
  //   if (cart) {
  //     saveCartToFirestore(cart);
  //   }
  // }, [cart, currentUser]);
  // const addToCart1 = (item) => {
  //   setCart((prevCart) => [...prevCart, item]);
  // };

  return (
    <div>
      <Hero />
      
      {/* search */}
      <div className="flex items-center container justify-center mx-auto">
        <div className="flex border border-purple-200 rounded mt-10">
          <input
            type="text"
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
            // value={filterSearch}
            value={filterSearch}
            onChange={handleSearch}
          />
          <button
            className="px-4 text-white bg-purple-600 border-l rounded "
            onClick={handleSearch}
            // (e) => setFilterSearch(e.target.value)
          >
            Search
          </button>
        </div>
      </div>
      {/* Homepage */}
      <div>
        <h1>Welcome, {displayName || "Guest"}</h1>
        {/* Render other components */}
        {/* <button onClick={() => addToCart1({ name: 'Mục mới' })}>Thêm vào giỏ hàng</button> */}
      </div>

      <section className="py-16">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-4 xl:grid-cols-5
          gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {result.length > 0 ? (
              result.map((product) => {
                return <Product product={product} key={product.id} />;
              })
            ) : filterSearch.length === 0 ? (
              currentItems.map((product) => {
                return <Product product={product} key={product.id} />;
              })
            ) : (
              <p> no result</p>
            )}
          </div>
          <div></div>
        </div>
      </section>
      <div
        className="flex m-auto container justify-center mb-12
       "
      >
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className="p-2 px-5 mx-[2px]  bg-slate-800 text-white cursor-pointer
          group-hover:bg-slate-100 transition-all duration-300   "
            onClick={() => goToPage(page)}
            style={{
              fontWeight: currentPage === page ? "bold" : "normal",
              color: currentPage === page ? "red" : "white",
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
