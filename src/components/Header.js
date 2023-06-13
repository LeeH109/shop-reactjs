import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
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
    {/* <div className="flex border border-purple-200 rounded ">
          <input
            type="text"
            className="block w-full px-2 py-1 w-[200px]
             text-purple-700 bg-white border rounded-md
              focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button
            className="px-4 text-white bg-black border-l rounded  "
            // (e) => setFilterSearch(e.target.value)
          >
            Search
          </button>
        </div> */}
   {/* <div onClick={() => {
          setIsOpen(!isOpen);
        }}> */}
        <Link to={`/cart`}> 
        <BsBag className="text-2xl" color="white"  /> 
           <h1 className=" absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs rounded-full"> {totalItem} </h1>
       
        </Link>
          {/* </div> */}
    </div>
        

       
      </div>
  
    </div>
  );
};

export default Header;
