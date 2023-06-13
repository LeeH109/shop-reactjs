import React, { useContext } from 'react';
import {  useNavigate, useNavigation, useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';


const ProductDetails = () => {

  const {id} = useParams()
  const {addToCart} = useContext(CartContext);
  console.log(id);
  const navigate = useNavigate();
  function goBack() {
    navigate(-1); // Quay lại trang trước đó
  }

  const {products} = useContext(ProductContext)
  
  const product = products.find(product => product.id === parseInt(id) )
    if (!product) {
      <section className='h-screen flex justify-center items-center '>Loading ....</section>
    }
    const { title ,  originalPrice , image, description } = product ;
  return <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
<div className=" container mx-auto">
<div className="flex flex-col lg:flex-row items-center">
<div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
<img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
</div>
<div className='flex-1 text-center lg:text-left '>
   <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}
   </h1>
   <div className="text-xl text-red-500 font-medium mb-6 ">

  $ { originalPrice}
</div>
<div className="mb-8"> {description} </div>
<button className='bg-primary py-4 px-8 text-white '
     onClick={()=> addToCart(product,product.id)}
>  Add to cart</button>
   </div>

</div>



{/* button */}
<button onClick={goBack}>Quay lại</button>

</div>
</section>

};

export default ProductDetails;
