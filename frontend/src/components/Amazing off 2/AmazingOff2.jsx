// box is ready for dynmaic time!
import React from "react";
import AmazingOffBox from "./AmazingOffBox";
export default function AmazingOff2() {
   return (
      <div className="grid grid-cols-2 xl:grid-cols-4 content-center gap-6 [&>*]:rounded-xl">
         {/* <AmazingOffBox/> */}
         <div className=" overflow-hidden ">
            <img src="./image/amazing off 2/10.webp" alt="" />
         </div>
         <div className=" overflow-hidden ">
            <img src="./image/amazing off 2/20.webp" alt="" />
         </div>
         <div className=" overflow-hidden ">
            <img src="./image/amazing off 2/30.webp" alt="" />
         </div>
         <div className=" overflow-hidden ">
            <img src="./image/amazing off 2/40.webp" alt="" />
         </div>
      </div>
   );
}
