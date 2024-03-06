// import Wrapper from '@/components/Wrapper'
// import React, { useState } from 'react'
// import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
// import { IoMdHeartEmpty } from 'react-icons/io';
// import RelatedProducts from '@/components/RelatedProducts';
// import { fetchDataFromApi } from '@/utils/api';
// import { getDiscountedPricePercentage } from '@/utils/helper';
// import { ReactMarkdown } from 'react-markdown';
// import { addToCart } from '@/store/cartSlice';

// import { useSelector, useDispatch } from 'react-redux';//useSelector is used to render the component and useDispatch is used to store the redux data 


// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

// const ProductDetails = ({product, products}) => {

// const [selectedSize,setSelectedSize]= useState();
// const [showSize,setShowSize]= useState(false);
// const dispatch= useDispatch();
//     const p= product?.data?.[0]?.attributes;
    
//     const notify= ()=>{
//         toast.success('Success. Check your cart!', {
//             position: "bottom-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//             });
//     }

//   return (
//     <div className='w-full md:py-20'>
//         <ToastContainer/>
//         <Wrapper>
//         <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>

//             {/* Left Column */}
//             <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
//             <ProductDetailsCarousel images={p.image && p.image.data}/>
//             </div>

//             <div className='flex-[1] py-3'>
//             <div className='text-[34px] font-semibold mb-2 leading-tight'>
//                 {/* for the spacing between two lines  */}
//             {/* Jordan Retro 6 G */}
//             {p.name}
//             </div>

//             <div className='text-lg font-semibold mb-5'>
//                 {/* Men&apos;Sport Shoes */}
//                 {p.subtitle}
//             </div>

//           <div className='flex items-center'>
//             <p className='mr-2 text-lg font-semibold'>
//         &#8377;{p.price}
//         {/* &#8377; denotes rupee symbol */}
//       </p>

//       {p.original_price && (
//         <>
//         <p className='text-base font-medium line-through'>
//         &#8377;{p.original_price}
//  </p>
//  <p className='ml-auto text-base font-medium text-green-500'>
//       {getDiscountedPricePercentage(
//         p.original_price,
//         p.price
//       )}
//     % off
//       </p>
//       </>
//       )}

// </div>
//             <div className='text-md font-medium text-black/[0.5] '>
//                incl. of taxes
//             </div>

//             <div className='text-md font-medium text-black/[0.5] mb-20 '>
//                {`(Also includes all applicable duties)`}
//                {/* written within curly braces as to present it as a string template and not a javascript code */}
//             </div>

            
//             </div>
//             <div className="mb-10">
//                             {/* HEADING START */}
//                             <div className="flex justify-between mb-2">
//                                 <div className="text-md font-semibold">
//                                     Select Size
//                                 </div>
//                                 <div className="text-md font-medium text-black/[0.5] cursor-pointer">
//                                     Select Guide
//                                 </div>
//                             </div>
//                             {/* HEADING END */}

//                             {/* SIZE START */}
//                              <div
                               
//                                 className="grid grid-cols-3 gap-2"
//                             >
//                                 {p.size.data.map((item,i)=>(
//                                     <div
//                                     key={i}
//                                     className={`border rounded-md text-center py-3 font-medium ${
//                                         item.enabled
//                                         ?"hover:border-black cursor-pointer"
//                                         : "cursor-not-allowed bg-black/[0.1] opacity-50"
//                                     }${
//                                         selectedSize=== item.size ? "border-black" : ""
//                                     }`}
//                                     onClick= {()=>{
//                                        setSelectedSize(item.size);
//                                        setShowSize(false);
//                                     }}
//                                     >
//                                         {item.size}
//                                     </div>

//                                 ))}
                               
//                                {/* {/* <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
//                                     UK 6    
//                                </div>

//                                {/* <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
//                                     UK 6.5   
//                                </div> */}

//                                {/* <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
//                                     UK 7    
//                                </div> */}

//                                {/* <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
//                                     UK 7.5    
//                                </div> */}

//                                {/* <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
//                                     UK 8    
//                                </div> */}
// {/* 
//                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
//                                     UK 8.5   
//                                </div> */}

//                                {/* <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
//                                     UK 9   
//                                </div> */}
//                                {/* <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
//                                     UK 9.5   
//                                </div> */}

//                                {/* <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
//                                     UK 10    
//                                </div> */}

//                                {/* <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
//                                     UK 10.5   
//                                </div> */}

//                                 {/* <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
//                                     UK 11 
//                                </div>  */}

                               
//                             {/* </div> */}
//                             {/* SIZE END */}

//                             SHOW ERROR START */

                           
//                                 {showSize && 9(
//                                 <div className="text-red-600 mt-1">
//                                     Size selection is required
//                                 </div>
//                                 )}
                           
//                             {/* SHOW ERROR END */}
//                         </div>
//                         {/* PRODUCT SIZE RANGE END */}

//                         {/* ADD TO CART BUTTON START */}
//                         <button
//                             className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75" 
//                         onClick={()=>{
//                             if(!selectedSize){
//                                 setShowSize(true);
//                                 document.
//                                 getElementById("sizesGrid")
//                                 .scrollIntoView({
//                                     block: "center",
//                                     behaviour: "smooth",
//                                 });
//                             } else{

                            
//                             dispatch(
//                                 addToCart({
//                                     ...product?.data?.[0],
//                                     selectedSize,
//                                     oneQuantityPrice: p.price,
//                                 })
//                                 );
//                                 notify();//now here notify is invoked
//                         }
//                         }}
//                         >
//                             Add to Cart
//                         </button>
//                         {/* ADD TO CART BUTTON END */}

//                         {/* WISHLIST BUTTON START */}
//                         <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
//                             Wishlist
//                             <IoMdHeartEmpty size={20} />
//                         </button>
//                         {/* WISHLIST BUTTON END */}

//                         <div>
//                             <div className="text-lg font-bold mb-5">
//                                 Product Details
//                             </div>
//                             <div className=" markdown text-md mb-5">
//                                <ReactMarkdown> {p.description}</ReactMarkdown>
//                             {/* Athletic shoes are specifically designed to be worn for participating in various sports. Since friction between the foot and the ground is an important force in most sports, modern athletic shoes are designed to maximize this force, and materials, such as rubber, are used. Participants in sports in which sliding is desirable, such as dancing or bowling, wear shoes with lower coefficients of friction. The earliest athletic shoes, dating to the mid-19th century, were track spikes—leather shoes with metal cleats on the soles to provide increased friction during running. They were developed by J.W. Foster & Sons, which later become known as Reebok. By the end of the 19th century, Spalding also manufactured these shoes as well. Adidas started selling shoes with track spikes in them for running and soccer in 1925. Spikes were eventually added to shoes for baseball and American football in the 20th century. Golfers also use shoes with small metal spikes on their soles to prevent slipping during their swing. */}


//                             </div>

                           
//                        </div>
//                     </div>
//                     {/* right column end */}
//                 <RelatedProducts products={products}/>
//            </div>  </Wrapper>   
         
//         </div>
       
   
   
//   );
// };

// export default ProductDetails;

// export async function getStaticPaths(){
//     const products= await fetchDataFromApi("/api/products?populate=*");
  
//     const paths= products?.data?.map((p)=>({//here ()parenthesis are used to return and {}are used to return inside an object
//       params:{
//         slug: p.attributes.slug,
//       },
//     }));
  
//     return{
//       paths,
//       fallback: false,
//   };
//   }
  
//   export async function getStaticProps({params: {slug}}){
//     const product = await fetchDataFromApi(`/api/products?populate=*&filters[slug][$eq]=${slug}`);
  
//    // const products = await fetchDataFromApi(`api/products?populate=*&[filters][categories][slug][$eq]=sneakers&[filters][slug][$ne]=${slug}`); this is wrong as we are giving multiple filters here due to which our experience will get slow while rendering that's why 
//     const products = await fetchDataFromApi(`/api/products?populate=*&[filters][slug][$ne]=${slug}`);
  
  
//     return{
//       props :{
        
//         product,
//         products,
        
//       },
//     };
//   }

import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { images } from "@/next.config";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }) => {
    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch();
    const p = product?.data?.[0]?.attributes;

    const notify = () => {
        toast.success("Success. Check your cart!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <div className="w-full md:py-20">
            <ToastContainer />
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* left column start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel images={p.image && p.image.data} />
                    </div>
                    {/* left column end */}

                    {/* right column start */}
                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            {p.name}
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            {p.subtitle}
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : &#8377;{p.price}
                            </p>
                            {p.original_price && (
                                <>
                                    <p className="text-base  font-medium line-through">
                                        &#8377;{p.original_price}
                                    </p>
                                    <p className="ml-auto text-base font-medium text-green-500">
                                        {getDiscountedPricePercentage(
                                            p.original_price,
                                            p.price
                                        )}
                                        % off
                                    </p>
                                </>
                            )}
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START */}
                            <div
                                id="sizesGrid"
                                className="grid grid-cols-3 gap-2"
                            >
                                {p.size.data.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`border rounded-md text-center py-3 font-medium ${
                                            item.enabled
                                                ? "hover:border-black cursor-pointer"
                                                : "cursor-not-allowed bg-black/[0.1] opacity-50"
                                        } ${
                                            selectedSize === item.size
                                                ? "border-black"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSelectedSize(item.size);
                                            setShowError(false);
                                        }}
                                    >
                                        {item.size}
                                    </div>
                                ))}
                            </div>
                            {/* SIZE END */}

                            {/* SHOW ERROR START */}
                            {showError && (
                                <div className="text-red-600 mt-1">
                                    Size selection is required
                                </div>
                            )}
                            {/* SHOW ERROR END */}
                        </div>
                        {/* PRODUCT SIZE RANGE END */}

                        {/* ADD TO CART BUTTON START */}
                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                            onClick={() => {
                                if (!selectedSize) {
                                    setShowError(true);
                                    document
                                        .getElementById("sizesGrid")
                                        .scrollIntoView({
                                            block: "center",
                                            behavior: "smooth",
                                        });
                                } else {
                                    dispatch(
                                        addToCart({
                                            ...product?.data?.[0],
                                            selectedSize,
                                            oneQuantityPrice: p.price,
                                        })
                                    );
                                    notify();
                                }
                            }}
                        >
                            Add to Cart
                        </button>
                        {/* ADD TO CART BUTTON END */}

                        {/* WHISHLIST BUTTON START */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* WHISHLIST BUTTON END */}

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                <ReactMarkdown>{p.description}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                    {/* right column end */}
                </div>

                <RelatedProducts products={products} />
            </Wrapper>
        </div>
    );
};

export default ProductDetails;

export async function getStaticPaths() {
    const products = await fetchDataFromApi("/api/products?populate=*");
    const paths = products?.data?.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const product = await fetchDataFromApi(
        `/api/products?populate=*&filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
        `/api/products?populate=*&[filters][slug][$ne]=${slug}`
    );

    return {
        props: {
            product,
            products,
        },
    };
}