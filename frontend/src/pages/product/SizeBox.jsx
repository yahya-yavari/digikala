import React from "react";

export default function SizeBox({size,active}) {
   return (
      <span className={`rounded-full text-[11px] xl:text-[14px] border border-gray-300 w-min py-2 px-3 xl:p-3.5 ring-sky-500 duration-300 ${active?'ring-2 xl:ring-[3px]':''}`}>
         {size}
      </span>
   );
}
