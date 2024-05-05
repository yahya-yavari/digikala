import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Category from "../../components/category-slider/Category";
import Shortcut from "../../components/shortcut/Shortcut";
import Off from "../../components/off slider/Off";
import AmazingOff from "../../components/amazing off/AmazingOff";
import AmazingOff2 from "../../components/Amazing off 2/AmazingOff2";
import CategoryBuy from "../../components/category buy/CategoryBuy";
import AmazingOff3 from "../../components/Amazing off 3/AmazingOff3";
import BottomNav from "../../components/bottom navigation/BottomNav";
import Footer from "../../components/footer/Footer";



export default function Index() {
   
   return (
      <div className="flex flex-col items-center">

         
            <Header />
         
         <div className="sm:max-w-xl w-full xl:max-w-[1700px] mb-4 xl:mb-6 rounded-xl overflow-hidden">
            <Category />
         </div>
         <div className="p-2 w-full sm:max-w-xl xl:w-full xl:max-w-[1400px] mb-5 xl:mb-7 rounded-xl ">
            <Shortcut />
         </div>
         <div className="w-full sm:max-w-2xl xl:w-full xl:max-w-[1400px] bg-primaryRed py-2.5 rounded-xl mb-5 ">
            <Off />
         </div>
         <div className="px-3.5 xl:px-0 w-full sm:max-w-xl xl:w-full xl:max-w-[1400px] mb-4 xl:mb-5   ">
            <div className="bg-[#EEEFEF] w-full rounded-xl">
               <AmazingOff />
            </div>
         </div>
         <div className="px-3.5 xl:px-0 w-full sm:max-w-xl xl:w-full xl:max-w-[1400px] mb-9 xl:mb-11   ">
            <AmazingOff2 />
         </div>
         <div className="px-3.5 xl:px-0 w-full sm:max-w-xl xl:w-full xl:max-w-[1400px] mb-[60px] xl:mb-[80px] ">
            <CategoryBuy />
         </div>
         <div className="px-3.5 xl:px-0 w-full sm:max-w-xl xl:w-full xl:max-w-[1400px] mb-20 xl:mb-12   ">
            <AmazingOff3 />
         </div>

         <Footer />




         <BottomNav/>
      </div>
   );
}
