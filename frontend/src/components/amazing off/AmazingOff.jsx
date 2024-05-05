import React from "react";
import OffBadge from "../off-badge/OffBadge";

import { IoMdArrowBack } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function AmazingOff() {
   return (
      <div className=" p-3 xl:px-9 rounded-2xl flex flex-col xl:flex-row xl:items-center xl:justify-between ">
         <div className="flex items-center mb-5 xl:mb-0 ">
            <div>
               <img
                  src="./image/amazing off/fresh.webp"
                  className="w-[40px] xl:w-[65px]"
                  alt=""
               />
            </div>
            <div>
               <img
                  src="./image/amazing off/freshText.svg"
                  className="w-[193px] xl:w-[260px] mr-4"
                  alt=""
               />
            </div>
            <div className="hidden xl:flex justify-center items-center bg-[#39ae00] text-white text-sm rounded-full py-1 px-2.5 mr-4 font-semibold">
               تا 25% تخفیف
            </div>
         </div>

         <div className="flex items-center justify-between   ">
            <div className="flex gap-x-2 [&>*]:w-[68px] [&>*]:h-[68px] [&>*]:bg-white [&>*]:rounded-full [&>*]:flex [&>*]:items-center [&>*]:justify-center xl:[&>*]:w-[72px] xl:[&>*]:h-[72px]">
               <div className="relative">
                  <img
                     src="./image/amazing off/1.webp"
                     className="w-[57px] xl:w-16 rounded-full"
                     alt=""
                  />
                  <span className="absolute -bottom-1 right-0">
                     <OffBadge />
                  </span>
               </div>
               <div className="relative">
                  <img
                     src="./image/amazing off/2.webp"
                     className="w-[57px] xl:w-16 rounded-full"
                     alt=""
                  />
                  <span className="absolute -bottom-1 right-0">
                     <OffBadge />
                  </span>
               </div>
               <div className="relative">
                  <img
                     src="./image/amazing off/3.webp"
                     className="w-[57px] xl:w-16 rounded-full"
                     alt=""
                  />
                  <span className="absolute -bottom-1 right-0">
                     <OffBadge />
                  </span>
               </div>
               <div className="relative !hidden xl:!block">
                  <img
                     src="./image/amazing off/4.jpg"
                     className="w-[57px] xl:w-16 rounded-full"
                     alt=""
                  />
                  <span className="absolute -bottom-1 right-0">
                     <OffBadge />
                  </span>
               </div>
               <div className="relative !hidden xl:!block">
                  <img
                     src="./image/amazing off/5.jpg"
                     className="w-[57px] xl:w-16 rounded-full"
                     alt=""
                  />
                  <span className="absolute -bottom-1 right-0">
                     <OffBadge />
                  </span>
               </div>
            </div>

            <div className="xl:hidden w-11 h-11 rounded-full bg-white flex items-center justify-center ">
               <FaArrowLeftLong className="text-[#39ae00]" />
            </div>

            <div className="hidden rounded-full bg-white xl:flex items-center justify-center text-[#39ae00]  p-3 gap-x-2 py-3.5 mr-3">
               <span className="text-sm">بیش از 100 کالا</span>
               <FaArrowLeftLong className="" />
            </div>
         </div>
      </div>
   );
}
