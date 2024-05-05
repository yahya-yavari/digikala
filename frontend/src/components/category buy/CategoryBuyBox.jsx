import React from "react";

export default function CategoryBuyBox({ img, index, name }) {
   return (
      <div
         className="flex flex-col items-center w-[90px] h-[126px] xl:w-[115px] xl:h-[160px] overflow-x-auto text-[#0c0c0c] 
      "
      >
         <div className="mb-2  ">
            <img
               src={`${img}${index}.png`}
               className="block w-[90px] xl:w-[100px]"
               alt=""
            />
         </div>
         <label htmlFor="" className="text-[9px] xl:text-[11px] text-nowrap">
            {name}
         </label>
      </div>
   );
}
