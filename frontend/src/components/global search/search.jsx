import React,{useRef} from "react";
import { Link } from "react-router-dom";

import { CgSearch } from "react-icons/cg";
import { HiOutlineLogin } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";

export default function Search() {

   const textInput = useRef() 
   const focusTextInput = () => {
      textInput.current.focus()
      console.log(textInput.current);
   }

   return (
      <div className="flex justify-center w-full 0 xl:max-w-[1600px] ">
         <span className="hidden xl:flex">
            <img src="./image/digi.svg" width="115px" alt="" />
         </span>
         <div className="bg-primaryB text-primaryLight flex justify-start px-2 py-2.5 rounded-global items-center gap-x-1.5 xl:w-1/2 xl:mr-4 w-full max-w-[470px]" onClick={focusTextInput}>
            <span>
               <CgSearch className="text-xl" />
            </span>
            <span className="text-[18px] xl:hidden" > جستجو در </span>
            <span className="xl:hidden">
               <img src="./image/digi.svg" width="90px" alt="" />
            </span>
            <span className="xl:w-full">
               <input
                  type="text"
                  className="hidden xl:block w-[100%] bg-inherit xl:text-lg focus:outline-none"
                  placeholder="جستجو"
               />
               <input ref={textInput}
                  type="text"
                  className="xl:hidden w-[100%] bg-inherit  xl:text-lg focus:outline-none"
               />
            </span>
         </div>
         <div className="hidden xl:flex w-1/2  xl:justify-end">
            <div className="flex items-center justify-end gap-x-5  w-full  text-[#0c0c0c]">
               <button className="">
                  <Link
                     to={"/login"}
                     className="flex rounded-global gap-x-1 justify-between items-center font-extrabold border-[1px]  p-2 w-[137px]"
                  >
                     <HiOutlineLogin className="text-2xl" />
                     <div>ورود</div>
                     <div className="h-5 bg-[#0c0c0c] w-[4px]"></div>
                     <div>ثبت نام</div>
                  </Link>
               </button>
               <div className="h-5 bg-[#0c0c0c] w-[1.4px]"></div>
               <Link to={'/shop-cart'} className="p-1.5 rounded-global">
                  <FaCartShopping className="text-2xl" />
               </Link>
            </div>
         </div>
      </div>
   );
}
