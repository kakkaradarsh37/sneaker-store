// import React, { useState } from 'react'
// import Wrapper from './Wrapper';
// import Link from 'next/link';
// import Menu from './Menu'; 

// import {IoMdHeartEmpty} from "react-icons/io";
// import { BsCart } from 'react-icons/bs';
// import {BiMenuAltRight} from "react-icons/bi";
// import {VsChromeClose} from "react-icons/vsc"; 
// import { headers } from '@/next.config';

// const Header = () => {
//     const [mobileMenu, setMobileMenu ] = useState(false);
//     const [showCatMenu, setShowCatMenu ] = useState(false);
//     const [show, setShow ] = useState("translate-y-0");
//     const [lastScrollY, setLastScrollY ] = useState(0);

//   return (
//     <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center
//     justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>

//      <Wrapper className="h=[60px] flex justify-between items-center">
//       <Link href="/">
//       <img src="/logo.svg" className="w-[40px] md:w-[60px]" />
//       </Link>

//       <Menu
//       showCatMenu={showCatMenu}  
//       setShowCatMenu={setShowCatMenu}  
//       />

//       <div className='flex items-center gap-2 text-black'>
//         <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>

//           <IoMdHeartEmpty className='text-[19px] md:text-[24px]'/>

//           <div className="h-[14px] md:h-[18] min-w-[14px] md:left-7 text-white text=[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
// 69
//         </div>

//       </div>
//       </div>

//       <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>

// <BsCart className='text-[15px] md:text-[20px]'/>

// <div className="h-[14px] md:h-[18] min-w-[14px] md:left-7 text-white text=[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
// 6
// </div>

// </div>
// {/* Icon End */}

// {/* Mobile Menu */}
// <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>

// {mobileMenu ? (
// <VsChromeClose className="text-[16px] "
// onClick={()=> setMobileMenu(false)}
// />
// ) : (
// <BiMenuAltRight
//  className="text-[20px]"
//  onClick={() => setMobileMenu(true)}
// />

// )}
// </div>

// </div>
    
//      </Wrapper>
//      </header>
//   );
// };


// export default Header;

import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";

import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
//import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";
import { fetchDataFromApi } from "@/utils/api";


const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories, setCategories] = useState(null);

    const { cartItems } = useSelector((state) => state.cart);//here we destructured the quantity of cart through useSelector

    const controlNavbar = () => {
        if (window.scrollY > 200) {//means if the scroll down i.e. Y is more than 200px then remove the navbar else show it 
            if (window.scrollY > lastScrollY && !mobileMenu) {//means that when we will scroll upwards again then navbar again should be shown and it should not be a mobile menu
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const { data } = await fetchDataFromApi("/api/categories?populate=*");
        setCategories(data);
    };

    return (
        <header
            className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
        >
            <Wrapper className="h-[60px] flex justify-between items-center">
                <Link href="/">
                    <img src="/logo.svg" className="w-[40px] md:w-[60px]" />
                </Link>

                <Menu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                    categories={categories}
                />

                {mobileMenu && (//when true then only mobileMenu will be shown 
                    <MenuMobile
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                        categories={categories}
                    />
                )}

                <div className="flex items-center gap-2 text-black">
                    {/* Icon start */}
                    <Link href="/cart">
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                        <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
                        <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                            9
                        </div>
                    </div>
                    </Link>
                    {/* Icon end */}

                    {/* Icon start */}
                    <Link href="/cart">
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <BsCart className="text-[15px] md:text-[20px]" />
                            {cartItems.length > 0 && (
                                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                    {cartItems.length}
                                </div>
                             )} 
                        </div>
                    </Link>
                    {/* Icon end */}

                    {/* Mobile icon start */}
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                        {mobileMenu ? (
                            <VscChromeClose
                                className="text-[16px]"
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <BiMenuAltRight
                                className="text-[20px]"
                                onClick={() => setMobileMenu(true)}
                            />
                        )}
                    </div>
                    {/* Mobile icon end */}
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;