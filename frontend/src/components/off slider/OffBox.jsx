import React from "react";
import OffBadge from "../off-badge/OffBadge";

export default function OffBox({img}) {
   return (
      <div className=" min-w-[155px] w-[155px] h-[245px] xl:w-[182px] xl:h-[265px]  flex flex-col items-center justify-center bg-white rounded-xl ml-1 xl:mr-0">
         <div className="mb-3">
            <img src={img} alt="oh no no no" />
         </div>
         <div className="w-full flex justify-around ">
            <OffBadge />
            <span className="text-[14px] xl:text-[16px] font-bold">
               52038
               <span className="text-[9px] xl:text-[10px] pr-0.5">تومان</span>
            </span>
         </div>
         <div className="w-full text-end  pl-4 text-[#c0c2c5] text-[12px] xl:text-[13px] line-through">
            70700
         </div>
      </div>
   );
}
