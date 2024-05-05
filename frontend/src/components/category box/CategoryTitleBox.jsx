import React from "react";





export default function CategoryTitleBox({title,Icon , active,id,activeh}) {

   
   return (
      <div className={`flex flex-col gap-y-1.5 items-center justify-center p-3 duration-200 ${active&&'text-primaryRed'} border-b`} onClick={()=>activeh(id)}>
         <span>
            <Icon className="text-lg" />
         </span>
         <span className=" w-full flex items-center justify-center text-center">{title}</span>
      </div>
   );
}
