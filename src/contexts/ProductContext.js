import React, { Children, useEffect, useState } from 'react';
import { createContext } from 'react';
import Skeleton from 'react-loading-skeleton';


export const ProductContext = createContext()
 
const ProductProvider = ({children}) => {

  const [products,setProducts] = useState([])
  const [isLoading , setIsLoading] = useState(true);
//  fetch products 
  useEffect(()=>{
    const fetchProducts = async()=>{
      // const response = await fetch('https://fakestoreapi.com/products');
      try {
        const response = await fetch('https://shoe-data.onrender.com/products');
        const data = await response.json();
      
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
     
    fetchProducts();  
    

   
  },[])
  // đã có mảng =>  chạy hết mới đến useEffect
  // console.log(products);

  // if (isLoading) {
  //   return <div>Loading...</div>; // Hiển thị thông báo "Loading..." trong quá trình đợi
  // }

  // truyền products
 return <ProductContext.Provider
 value={{products}}>
{/* {children} */}


{isLoading ? (
        // Hiển thị skeleton loading khi dữ liệu đang được tải
        <div>
          <Skeleton height= {300} count={5}  /> {/* Ví dụ: Skeleton loading cho 5 mục */}
        </div>
      ) : (
        // Hiển thị nội dung khi dữ liệu đã được tải
        <div> 
        {children}
        </div>
      )}
  </ProductContext.Provider>


};

export default ProductProvider;
