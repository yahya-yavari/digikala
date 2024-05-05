// box is ready for dynmaic time!
import React from "react";
import AmazingOffBox3 from "../Amazing off 3/AmazingOffBox3";
export default function AmazingOff3() {
   return (
      <div className="grid grid-cols-1 xl:grid-cols-2 content-center gap-6 [&>*]:rounded-xl">
         {/* <AmazingOffBox/> */}
         <div className=" overflow-hidden ">
            <img src="./image/amazing off 3/1.webp" alt="" />
         </div>
         <div className=" overflow-hidden ">
            <img src="./image/amazing off 3/2.webp" alt="" />
         </div>
      </div>
   );
}
