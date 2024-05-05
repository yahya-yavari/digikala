import React from "react";

export default function DetailBox({title, detail}) {
   return (
      <div className="flex flex-col xl:grid w-min xl:w-full gap-y-0.5 bg-[#f0f0f1] p-2 text-[12px] xl:text-[13px] rounded-global">
         <p className="text-primaryLight">{title}</p>
         <p>{detail}</p>
      </div>
   );
}
