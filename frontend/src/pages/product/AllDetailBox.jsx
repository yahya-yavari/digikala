import React from "react";

export default function AllDetailBox({title, detail}) {
   return (
      <div className="flex text-xs xl:text-[14px] ">
         <span className="text-primaryLight min-w-28">{title}</span>
         <span className="flex flex-col w-full">
            <span className="mb-0.5">{detail}</span>
            <span className="bg-gray-200 h-[1px]"></span>
         </span>
      </div>
   );
}
