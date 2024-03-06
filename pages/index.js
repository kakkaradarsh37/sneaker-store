
// //import Head from "next/head";
// //import Image from "next/image";
// //import{Inter} from "@next/font/google"
// //import styles from ""
// import HeroBanner from "@/components/HeroBanner";
// import Wrapper from "@/components/Wrapper";
// import ProductCard from "@/components/ProductCard";
// import { useEffect, useState } from "react";
// import { fetchDataFromApi } from "@/utils/api";
// import { data } from "autoprefixer";
// //import product from "@/backend/src/api/product/controllers/product";

// export default function Home({products}) {

//   // const [data, setData ]= useState(null);//wwe created a state here to call the api and change the state initially kept null
//   // useEffect(()=>{
//   //   fetchProducts();
//   // }, []);

//   // const fetchProducts= async()=>{
//   //   const {data}= await fetchDataFromApi("/api/products");
//   //   setData(data);//store the data in setData 
//   // };

//     return ( 
         
//          <main > 
//          {/* className="h-[800px]"> */}
//         <HeroBanner/>
//         {/* <h1>{data?.[0]?.attributes?.name}</h1> for in ReactJs */}
//         {/* <h1>{products?.data?.[0]?.attributes?.name}</h1> */}
//         {/* here we are just trying to print the first sneaker data on the screen under the HeroBanner section and here also when we will search something from the google props then the data of the first sneaker will be displayed that is not there in ReactJS but in NextJS  */}
//          <Wrapper>
//           <div className="text-center min-w-[800px] mx-auto my-[50px] md:my-[80px]">
//             <div className="text-[28px] md: text-[34px] mb-5 font-semibold loading-tight">
//             A Way To Maximize Your Comfort
//             </div>

//             <div className="text-md md:text-xl">
            
//             A lightweight Nike ZoomX midsole is combined with
//                         increased stack heights to help provide cushioning
//                         during extended stretches of running.
//             </div>
//             {/* <div>Heading</div> */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0 ">
//               {products?.data?.((products)=>(
//                 <ProductCard key={product?.id} data={product}/>
//               ))}
//             {/* <ProductCard/>
//             <ProductCard/>
//             <ProductCard/>
//             <ProductCard/>
//             <ProductCard/>
//             <ProductCard/>
//             <ProductCard/>
//             <ProductCard/>
//             <ProductCard/> */}

//           </div>
//           </div>

//          </Wrapper>
//         </main>
//     );
// }

// //there methods SSG are declared outside the methods
// export async function getStaticProps(){//we will not use getServerStaticProps because that is used when we want to change our data within minutes
//   const products = await fetchDataFromApi("/api/products?populate=*");

//   return{
//     props:{products}//as the key and value are same
//   }
// }

// // export async function getStaticProps() {
// //     //const products = await fetchDataFromApi("/api/products?populate=*");

// //     // return {
// //     //     props: { products },
// //     // };
// // }


import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
export default function Home({ products }) {
    return (
        <main>
            <HeroBanner />
            <Wrapper>
                {/* heading and paragraph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Cushioning for Your Miles
                    </div>
                    <div className="text-md md:text-xl">
                        A lightweight Nike ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
                    </div>
                </div>
                {/* heading and paragaph end */}

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
                </div>
                {/* products grid end */}
            </Wrapper>
        </main>
    );
}

export async function getStaticProps() {
    const products = await fetchDataFromApi("/api/products?populate=*");

    return {
        props: { products },
    };
}