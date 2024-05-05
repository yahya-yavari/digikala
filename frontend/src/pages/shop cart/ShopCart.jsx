import React, { useContext, useState } from "react";
import BottomNav from "../../components/bottom navigation/BottomNav";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import SubmitShopBtn from "../../components/submit btn shop/SubmitShopBtn";

import Context from "../../context";

import { HiOutlineLogin } from "react-icons/hi";
import { IoChevronBackOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { RiDeleteBin6Line, RiHomeSmile2Line } from "react-icons/ri";
import { GiBattleTank, GiNotebook, GiTank } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaTruckArrowRight } from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";
import { LiaTruckSolid } from "react-icons/lia";
import { FaBitcoin, FaStudiovinari } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function ShopCard() {
   const [dropDown, setDropDown] = useState(false);

   const moveNextBuy = () => {
      setDropDown(false);
   };

   const deleteAll = () => {
      setDropDown(false);
   };
   return (
      <div
         className="w-full flex flex-col items-center relative mb-16"
         onResize={() => console.log("zoom")}
      >
         <div className="hidden xl:flex w-full sticky top-0 z-10">
            <Header />
         </div>

         <div className="xl:mb-16 xl:px-[128px] w-full max-w-[1600px] ">
            <header
               className="w-full grid grid-cols-2 text-[13px] text-primaryLight
            [&>*]:px-4 [&>*]:py-2.5 font-semibold xl:text-[15px] xl:flex xl:justify-start xl:gap-x-2 "
            >
               <button className="after-shop-btn">سبد خرید</button>
               <button className="">خرید بعدی</button>
            </header>
            <span className="block bg-gray-300 h-[0.5px] w-full mb-6"></span>

            {/* empty shop and hidden div when login */}

            <div className="px-4 xl:p-0 xl:grid grid-cols-4 gap-x-3 mb-16">
               <div
                  className="border-[1px] border-gray-200 shadow-md xl:shadow-none
                rounded-global py-6 pr-6 pl-4 col-span-1 xl:h-36 xl:order-2 mb-4"
               >
                  <Link to={"/login"} onClick={() => activeH("login")}>
                     <div className="flex justify-between mb-1 items-center">
                        <div className="flex items-center gap-x-2">
                           <span>
                              <HiOutlineLogin className="text-2xl text-primaryRed" />
                           </span>
                           <p className="text-[15px] xl:text-[17px] font-semibold">
                              ورود به حساب کاربری
                           </p>
                        </div>
                        <span>
                           <IoChevronBackOutline className="text-lg text-primaryRed" />
                        </span>
                     </div>
                     <p className="text-[12px] xl:text-[13px] text-primaryLight leading-5">
                        برای مشاهده محصولاتی که پیش‌تر به سبد خرید خود اضافه
                        کرده‌اید وارد شوید.
                     </p>
                  </Link>
               </div>

               <div
                  className="flex flex-col items-center xl:justify-start col-span-3
              xl:border-[1px] xl:rounded-global xl:border-gray-200 xl:p-9"
               >
                  <img
                     src="./image/shop cart/empty.svg"
                     className="w-52 mb-5"
                     alt=""
                  />
                  <p className="font-semibold mb-3">سبد خرید شما خالی است!</p>
                  <p className="text-[12px] text-primaryText">
                     می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:
                  </p>
               </div>
               
            </div> 

            {/* wrapper shop */}
            <div className="xl:grid grid-cols-4 gap-x-3">
               <div className="p-6 flex flex-col xl:border-[1px] border-gray-200 rounded-global col-span-3">
                  <div className="flex justify-between mb-1">
                     <h3 className="text-[15px]">سبد خرید شما</h3>
                     <button>
                        <HiDotsVertical
                           className={`text-xl text-primaryLight relative duration-300 ${
                              dropDown && "ring-4"
                           } ring-primaryRed ring-offset-8 rounded-full`}
                           onClick={() => setDropDown(true)}
                        />
                     </button>
                  </div>

                  <div className="text-primaryLight mb-7 text-[12px]">
                     2 کالا
                  </div>

                  {/* product wrapper template */}
                  <div>
                     {/* product template box */}
                     <div className="mb-4">
                        <div className="flex mb-10">
                           {/* product img */}
                           <div className="text-primaryRed">
                              <div className="mb-3  w-[115px] xl:w-[125px]">
                                 <img
                                    src="./image/shop cart/products/1.webp"
                                    className="w-full"
                                    alt="oh no no no"
                                 />
                              </div>
                              <div className="mb-1">
                                 <img
                                    src="./image/shop cart/products/amazing-off.svg"
                                    className="scale-110"
                                    alt=""
                                 />
                              </div>
                              {/* timer */}
                              <div
                                 className="text-xs xl:text-sm text-center mb-6 font-semibold"
                                 dir="ltr"
                              >
                                 01 : 37 : 20
                              </div>
                              {/* plus btn */}
                              <div className="w-full flex justify-between items-center border border-gray-300 rounded-global p-2 ">
                                 <FaPlus className="text-lg" />
                                 <span className="font-bold">1</span>
                                 <RiDeleteBin6Line className="text-lg" />
                              </div>
                           </div>

                           <div className="mr-3">
                              <p className="text-[12px] xl:text-[14px] font-bold mb-3">
                                 نودل با طعم گوشت آماده لذیذ - 75 گرم بسته 5
                                 عددی
                              </p>
                              <div className="flex flex-col gap-y-1.5 [&>*]:flex [&>*]:items-center [&>*]:text-[11px] xl:[&>*]:text-[13px] [&>*]:text-primaryLight [&>*]:gap-x-1.5 mb-6">
                                 <span>
                                    <GiTank   className="scale-x-[-1] text-primaryRed text-lg xl:text-xl" />
                                    بسته بندی تانک و محکم
                                 </span>
                                 <span>
                                    <GoShieldCheck className=" text-blue-400 text-lg xl:text-xl" />
                                    گارانتی اصالت و سلامت فیزیکی کالا
                                 </span>
                                 <span>
                                    <RiHomeSmile2Line className="text-primaryRed text-lg xl:text-xl" />
                                    دیجی‌کالا
                                 </span>
                                 <span>
                                    <FaTruckArrowRight className="scale-x-[-1] text-green-400 text-lg xl:text-xl" />
                                    ارسال سریع سوپرمارکتی دیجی‌کالا
                                 </span>
                                 <span>
                                    <FaStudiovinari className="scale-x-[-1] text-blue-400 text-lg xl:text-xl" />
                                    ارسال امروز
                                 </span>
                              </div>
                              {/* price */}
                              <div className=" text-[16px] xl:text-[19px] flex items-center justify-start font-bold ">
                                 18,999,000
                                 <span className="text-[10px] xl:text-[13px] mr-1.5">
                                    تومان
                                 </span>
                              </div>
                           </div>
                        </div>
                        <span className="bg-gray-200 h-[1px] w-full block"></span>
                     </div>

                     <div className="mb-4">
                        <div className="flex mb-10">
                           {/* product img */}
                           <div div className="text-primaryRed">
                              <div className="mb-3  w-[115px] xl:w-[125px]">
                                 <img
                                    src="./image/shop cart/products/2.webp"
                                    className="w-full"
                                    alt=""
                                 />
                              </div>
                              <div className="mb-1">
                                 <img
                                    src="./image/shop cart/products/amazing-off.svg"
                                    className="scale-110"
                                    alt=""
                                 />
                              </div>
                              {/* timer */}
                              <div
                                 className="text-xs xl:text-sm text-center mb-6 font-semibold"
                                 dir="ltr"
                              >
                                 01 : 37 : 20
                              </div>
                              {/* plus btn */}
                              <div className="w-full flex justify-between items-center border border-gray-300 rounded-global p-2 ">
                                 <FaPlus className="text-lg" />
                                 <span className="font-bold">1</span>
                                 <RiDeleteBin6Line className="text-lg" />
                              </div>
                           </div>

                           <div className="mr-3">
                              <p className="text-[12px] xl:text-[14px] font-bold mb-3">
                                 گوشی موبایل ناتینگ مدل Phone 1 دو سیم کارت
                                 ظرفیت 256 گیگابایت و رم 12 گیگابایت
                              </p>
                              <div className="flex flex-col gap-y-1.5 [&>*]:flex [&>*]:items-center [&>*]:text-[11px] xl:[&>*]:text-[13px] [&>*]:text-primaryLight [&>*]:gap-x-1.5 mb-6">
                                 <span>
                                    <GoShieldCheck className=" text-blue-400 text-lg xl:text-xl" />
                                    گارانتی اصالت و سلامت فیزیکی کالا
                                 </span>
                                 <span>
                                    <RiHomeSmile2Line className="text-primaryRed text-lg xl:text-xl" />
                                    دیجی‌کالا
                                 </span>
                                 <span>
                                    <FaTruckArrowRight className="scale-x-[-1] text-green-400 text-lg xl:text-xl" />
                                    ارسال سریع سوپرمارکتی دیجی‌کالا
                                 </span>
                                 <span>
                                    <LiaTruckSolid className="scale-x-[-1] text-primaryRed text-lg xl:text-xl" />
                                    ارسال دیجی‌کالا
                                 </span>
                                 <span>
                                    <FaStudiovinari className="scale-x-[-1] text-blue-400 text-lg xl:text-xl" />
                                    ارسال امروز
                                 </span>
                              </div>
                              {/* price */}
                              <div className=" text-[16px] xl:text-[19px] flex items-center justify-start font-bold ">
                                 18,999,000
                                 <span className="text-[10px] xl:text-[13px] mr-1.5">
                                    تومان
                                 </span>
                              </div>
                           </div>
                        </div>
                        <span className="bg-gray-200 h-[1px] w-full block"></span>
                     </div>
                  </div>
               </div>
               <div className="hidden xl:flex rounded-global col-span-1 ">
                  <div className="w-full">
                     <div className="bottom-0">
                        <div className="relative border-[1px] border-gray-200 flex flex-col gap-y-5 rounded-global p-5 font-semibold overflow-hidden mb-4">
                           <div className="flex justify-between text-primaryLight">
                              <span className="text-[13px]">
                                 قیمت کالاها (۵)
                              </span>
                              <span className="text-[15px]">
                                 18,99,000
                                 <span className="text-[10px] mr-1 font-semibold">
                                    تومان
                                 </span>
                              </span>
                           </div>

                           <div className="flex justify-between">
                              <span className="text-[13px]">جمع سبد خرید</span>
                              <span className="text-[15px]">
                                 18,99,000
                                 <span className="text-[10px] mr-1 font-semibold">
                                    تومان
                                 </span>
                              </span>
                           </div>

                           <div className="flex justify-between">
                              <span className="text-[13px]">
                                 سود شما از خرید
                              </span>
                              <span className="text-[17px] text-primaryRed">
                                 18,99,000
                                 <span className="text-[10px] mr-1 font-semibold">
                                    تومان
                                 </span>
                              </span>
                           </div>

                           <div className="mb-14 w-full">
                              <SubmitShopBtn />
                           </div>
                           <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between bg-[#f0f0f1]">
                              <span className="flex items-center gap-x-1 text-[12px] text-primaryLight ">
                                 <FaBitcoin className="text-yellow-400 text-lg" />
                                 دیجی‌کلاب
                                 <IoIosInformationCircleOutline className=" text-lg" />
                              </span>
                              <span className="text-[10px]">
                                 <span className="text-[15px] ml-1">150</span>
                                 امتیاز
                              </span>
                           </div>
                        </div>
                        <p className="text-[11px] text-primaryLight">
                           هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام
                           موجودی، کالاها از سبد حذف می‌شوند
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* mobile fixed submit buy */}
         <div className="bg-white flex w-full justify-between p-3 fixed bottom-[54px] border-t-2 border-gray-200 xl:hidden">
            <div>
               <SubmitShopBtn />
            </div>
            <div className="text-end">
               <p className="text-[11px] mb-2 text-primaryLight">
                  جمع سبد خرید
               </p>
               <p className="text-[13px] font-bold">
                  18,999,000
                  <span className="text-[10px] mr-1 font-semibold">تومان</span>
               </p>
            </div>
         </div>

         {/* drop down */}
         <div className={`w-full ${dropDown ? "block" : "hidden"} `}>
            <div className="bg-white flex flex-col gap-y-2 rounded-xl fixed bottom-0 xl:bottom-auto w-full z-20 py-2 [&>*]:duration-[150ms] xl:w-1/3 xl:scale-125 xl:top-[50%] xl:left-[50%] xl:translate-x-[-50%] xl:translate-y-[-50%]">
               <button
                  className="flex gap-x-4 hover:bg-gray-200 text-xs items-center py-2 px-4 font-semibold"
                  onClick={moveNextBuy}
               >
                  <GiNotebook className="text-xl" />
                  انتقال همه خرید به بعدی
               </button>

               <button
                  className="flex gap-x-4 hover:bg-gray-200 text-xs items-center py-2 px-4 font-semibold"
                  onClick={deleteAll}
               >
                  <RiDeleteBin6Line className="text-xl " />
                  حذف همه
               </button>
            </div>

            <button
               className="bg-black absolute -bottom-full top-0 right-0 left-0 opacity-30 xl:z-10"
               onClick={() => setDropDown(false)}
            ></button>
         </div>
         <Footer />
         <BottomNav />
      </div>
   );
}
