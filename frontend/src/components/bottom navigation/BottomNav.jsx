import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import Context from "../../context";

import { BiCategoryAlt } from "react-icons/bi";
import { RiHome2Fill } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { CiUser } from "react-icons/ci";

export default function BottomNav() {
   const [active, setActive] = useState("");

   useEffect(() => {
      setActive(location.pathname);
      // console.log(active);
   }, []);

   return (
      <div className="fixed bottom-0 left-0 z-0 w-full h-[54px] bg-white border-t-[2px] border-gray-200 xl:hidden ">
         <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            <Link
               to={"/"}
               type="button"
               className={` inline-flex flex-col items-center justify-center px-5hover:bg-gray-50 group  ${
                  active == "/" ? "text-black" : "text-primaryLight"
               }`}
            >
               <RiHome2Fill className="text-2xl mb-0.5" />

               <span className="text-[10px] text-nowrap font-semibold">
                  خانه
               </span>
            </Link>
            <Link
               to={"/category"}
               type="button"
               className={` inline-flex flex-col items-center justify-center   hover:bg-gray-50 group ${
                  active == "/category" ? "text-black" : "text-primaryLight"
               }`}
            >
               <BiCategoryAlt className="text-2xl mb-0.5" />
               <span className="text-[10px] text-nowrap font-semibold ">
                  دسته بندی
               </span>
            </Link>
            <Link
               to={"/shop-cart"}
               type="button"
               className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group ${
                  active == "/shop-cart" ? "text-black" : "text-primaryLight"
               }`}
            >
               <LuShoppingCart className="text-2xl mb-0.5  scale-x-[-1]" />
               <span className="text-[10px] text-nowrap font-semibold ">
                  سبدخرید
               </span>
            </Link>
            <Link
               to={"/login"}
               type="button"
               className={` inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group ${
                  active == "/login" ? "text-black" : "text-primaryLight"
               }`}
            >
               <CiUser className="text-2xl mb-0.5" strokeWidth={1} />
               <span className="text-[10px] text-nowrap font-semibold ">
                  دیجی‌کالای من
               </span>
            </Link>
         </div>
      </div>
   );
}
