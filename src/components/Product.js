import React, { useContext } from 'react';
import {BsPlus , BsEyeFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext';
// 
const Product = ({product}) => {
  const {addToCart}= useContext(CartContext);
// console.log(product);
  const {id, image,category ,title, originalPrice } = product;

  

  return <div >
   <div className="border border-[#e4e4e4] h-[300px]
   mb-4 relative overflow-hidden group transition ">
    
    <div className="w-full h-full flex justify-center items-center">
      <div className='w-[200px] mx-auto flex justify-center items-center'>
        <img src={image} alt="" className='max-h-[160px] group-hover:scale-110 
        transition duration-300 ' />
      </div>
    </div>
    <div className="absolute top-0 right-0 bg-red-500 p-2 
    
    -right-11 group-hover:right-5 opacity-0 group-hover:opacity-100
    transition-all duration-300
    
    ">
     
      {/* <Link  to={`/product/${id}`}
    
      > */}
         <button className='text-yellow-100'
       onClick={()=> addToCart(product,id)}
         >
      Add to cart
      </button>
      {/* </Link> */}
    </div>

    
    </div>
   <div >
<div className="text-sm capitalize  text-gray-500 mb-1  "> {category} </div>
<Link to={`/product/${id}`}>
<h2 className="font-semibold mb-1"> {title} </h2>
</Link>
<div className="">$ { originalPrice} </div>

   </div>

  


  </div>;
};

export default Product;
