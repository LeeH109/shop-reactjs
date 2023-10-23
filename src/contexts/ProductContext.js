import React, { Children, useEffect, useState } from "react";
import { createContext } from "react";
import Skeleton from "react-loading-skeleton";

export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //  fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      // const response = await fetch('https://fakestoreapi.com/products');
      try {
        const response = await fetch("https://shoe-data.onrender.com/products");
        const data = await response.json();

        setProducts(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);
 
  return (
    <ProductContext.Provider value={{ products }}>
      {/* {children} */}

      {isLoading ? (
        <div>
          <Skeleton height={300} count={5} />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
