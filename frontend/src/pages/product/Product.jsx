import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import Footer from "../../components/footer/Footer";
import SizeBox from "./SizeBox";
import AllDetailBox from "./AllDetailBox";
import ShortcutSection from "./ShortcutSection";
import AddShopBtn from "./AddShopBtn";

import { LuShoppingCart } from "react-icons/lu";
import { HiDotsVertical } from "react-icons/hi";
import {
   FaArrowRight,
   FaBitcoin,
   FaChevronLeft,
   FaRegComment,
   FaStar,
} from "react-icons/fa6";
import { GoHeartFill, GoShieldCheck } from "react-icons/go";
import Header from "../../components/header/Header";
import DetailBox from "./detailBox";

import { CiShop } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsQuestionOctagon } from "react-icons/bs";
import { MdInfoOutline } from "react-icons/md";

export default function Product() {
   const param = useParams();
   // console.log(param.id);
   const [favaorte, setFavaorte] = useState(false);
   const [quizIinput, setQuizIinput] = useState('')
   const inputRef =useRef()

   const itemDetails = [
      { title: "جنس", detail: "پنبه، نخ" },
      { title: "قد", detail: "روی باسن" },
      { title: "نوع لباس", detail: "آزاد" },
      { title: "یقه", detail: "گرد" },
      { title: "آستین", detail: "کوتاه" },
      { title: "مورد استفاده", detail: "اسپرت، روزمره" },
      { title: "طرح", detail: "چاپ" },
      { title: "کشور", detail: "ایران" },
   ];
   const sizes = [
      { size: "XXXL", active: false },
      { size: "XXL", active: false },
      { size: "XL", active: false },
      { size: "L", active: true },
   ];
   const shortcuts = [
      { title: "مشخصات", href: "#detail", active: true },
      { title: "دیدگاه‌ها", href: "#comment", active: false },
      { title: "پرسش‌ها", href: "#quiz", active: false },
   ];

   const favorite = () => {
      setFavaorte((prev) => !prev);
   };

   return (
      <div className="flex flex-col justify-center py-4 px-5 overflow-hidden">
         {/* header */}
         <div className="xl:hidden flex items-center justify-between mb-6 fixed left-0 right-0 top-0 bg-white z-10 py-4 px-5 border-b ">
            <div className="flex gap-x-2.5">
               <span>
                  <FaArrowRight />
               </span>
               <span>
                  <img src="./image/digi.svg" width={68} alt="" />
               </span>
            </div>

            <div className="flex [&>*]:text-[21px] gap-x-4 [&>*]:p-1  ">
               <Link to={"/shop-cart"}>
                  <LuShoppingCart className="scale-x-[-1] " />
               </Link>
               <span
                  className={`duration-300 cursor-pointer ${
                     favaorte ? "text-primaryRed" : ""
                  }`}
                  onClick={() => favorite()}
               >
                  <GoHeartFill />
               </span>
               <span>
                  <HiDotsVertical />
               </span>
            </div>
         </div>

         <div className="hidden xl:block ">
            <Header />
         </div>

         <div className="mt-14 xl:mt-0">
            {/* short address */}
            <div className="flex gap-x-2.5 overflow-x-auto scrollbar-none text-nowrap text-[11.5px] text-primaryLight mb-4 pl-[15px] pr-1.5 xl:p-0">
               <span>دیجی‌کالا</span>/<span>مد و پوشاک</span>/
               <span>مردانه</span>/<span>لباس مردانه</span>/<span>تی شرت</span>
            </div>

            <div className="mb-4 xl:grid xl:grid-cols-8 gap-x-3">
               {/* img & details section */}
               <div className="overflow-hidden mb-4 xl:col-span-3">
                  <Swiper
                     effect={"cube"}
                     grabCursor={true}
                     cubeEffect={{
                        shadow: true,
                        slideShadows: false,
                        shadowOffset: 10,
                        shadowScale: 0.5,
                     }}
                     loop={true}
                     pagination={true}
                     modules={[EffectCube, Pagination]}
                     className="mySwiper w-[255px] xl:w-auto xl:max-w-[512px]"
                  >
                     <SwiperSlide className="">
                        <img src="./image/product/p1/1.webp" />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src="./image/product/p1/2.webp" />
                     </SwiperSlide>
                     <SwiperSlide>
                        <img src="./image/product/p1/3.webp" />
                     </SwiperSlide>
                  </Swiper>
               </div>

               {/* short details */}
               <div className="flex flex-col gap-x-2 gap-y-2.5 [&>*]:overflow-x-auto [&>*]:scrollbar-none text-nowrap mb-6 xl:col-span-3 py-2 rounded-global">
                  <div className="mb-4">
                     <div className="flex text-[#19bfd3] text-[12px] mb-2">
                        <span className="">متفرقه</span>/
                        <span>تی شرت مردانه</span>
                     </div>
                     <h3 className="font-semibold text-[16.5px] mb-2.5 xl:mb-8">
                        تی شرت آستین کوتاه مردانه ولکات مدل چاپی
                     </h3>

                     <h3 className="hidden xl:block text-[16px] font-semibold mb-5">
                        ویژگی ها
                     </h3>
                     <div className="flex gap-x-0.5 mb-1 xl:grid xl:grid-cols-3 xl:gap-2 overflow-x-auto scrollbar-none xl:p-0.5">
                        {itemDetails.map((x, index) => {
                           return <DetailBox {...x} key={index} />;
                        })}
                     </div>
                     <span className="h-[0.9px] bg-gray-300 w-[100vh]"></span>
                  </div>

                  {/* size box */}
                  <div className="flex flex-col gap-y-2.5 order-2">
                     <p className=" text-[15px] xl:text-[17px] font-semibold">
                        اندازه: L
                     </p>
                     <div className="flex gap-x-2 xl:gap-x-2.5 mb-2">
                        {sizes.map((x, index) => {
                           return <SizeBox {...x} key={index} />;
                        })}
                     </div>
                  </div>
               </div>

               {/*desktop buy form & saler details  */}
               <div className="hidden xl:flex col-span-2 px-5 py-5 border h-min border-gray-300 rounded-global ">
                  <div className="flex flex-col items-start w-full">
                     <div className="flex flex-col gap-y-2.5 mb-3">
                        <p className=" text-[16px] font-semibold ">فروشنده</p>
                        <div className="flex gap-x-2.5 text-[14px] items-center">
                           <span>
                              <CiShop className="text-[30px] text-primaryRed" />
                           </span>
                           <p>ول کات </p>
                        </div>
                        <div className="flex gap-x-2.5 text-[13px] items-center">
                           <span>
                              <IoIosCheckmarkCircleOutline className="text-[30px] text-sky-500" />
                           </span>
                           <p>
                              عملکرد{" "}
                              <span className="text-sky-500">خیلی خوب</span>
                           </p>
                        </div>
                     </div>
                     <div className="bg-gray-300 h-[1px] w-full mb-6"></div>
                     <div className="w-full ">
                        <div className="flex justify-between flex-row-reverse items-center mb-2.5">
                           <p className="font-semibold ">
                              445,000
                              <span className="text-xs">تومان</span>
                           </p>
                           <div className="cursor-pointer">
                              <MdInfoOutline className="text-primaryLight text-2xl" />
                           </div>
                        </div>
                        <div className="mb-5">
                           <AddShopBtn />
                        </div>

                        <div className="flex gap-x-2.5 items-center mb-4 border-b border-gray-300 pb-2.5">
                           <span>
                              <GoShieldCheck className="text-green-600 text-[24px] " />
                           </span>
                           <p className="text-[14px]">
                              گارانتی اصالت و سلامت فیزیکی کالا
                           </p>
                        </div>

                        <div className="flex gap-x-2.5 items-center mb-4">
                           <span>
                              <FaBitcoin className="text-yellow-400 text-[24px]" />
                           </span>
                           <p className="text-[15px]">45 امتیاز دیجی‌کلاب</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* bg space */}
            <div className="bg-gray-300 h-3 w-full rounded-md mb-5 xl:hidden"></div>

            {/* saler details */}
            <div className="flex flex-col gap-y-3.5 mb-6 xl:hidden">
               <div className="flex flex-col gap-y-2.5">
                  <p className=" text-[14px] font-semibold ">فروشنده</p>
                  <div className="flex gap-x-2.5 text-[13px] items-center">
                     <span>
                        <CiShop className="text-[26px] text-primaryRed" />
                     </span>
                     <p>ول کات </p>
                  </div>
                  <div className="flex gap-x-2.5 text-[12px] items-center">
                     <span>
                        <IoIosCheckmarkCircleOutline className="text-[26px] text-sky-500" />
                     </span>
                     <p>
                        عملکرد <span className="text-sky-500">خیلی خوب</span>
                     </p>
                  </div>
               </div>

               <span className="w-full h-[1px] bg-gray-300"></span>

               <div className="flex gap-x-2.5 items-center">
                  <span>
                     <GoShieldCheck className="text-green-600 text-[24px] " />
                  </span>
                  <p className="text-[13px]">
                     گارانتی اصالت و سلامت فیزیکی کالا
                  </p>
               </div>

               <span className="w-full h-[1px] bg-gray-300"></span>

               <div className="flex gap-x-2.5 items-center">
                  <span>
                     <FaBitcoin className="text-yellow-400 text-[24px]" />
                  </span>
                  <p className="text-[14px]">45 امتیاز دیجی‌کلاب</p>
               </div>
            </div>

            {/* bg space */}
            <div className="bg-gray-300 xl:hidden h-1 w-full rounded-md mb-5"></div>

            {/* mobile icons , hidden for xl */}
            <div
               className="flex items-start xl:hidden justify-between [&>*]:min-w-20 gap-x-4 [&>*]:gap-y-1 [&_img]:w-[44px] [&_span]:text-[10px] [&_span]:text-center mb-10 overflow-x-auto 
            [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center scrollbar-none"
            >
               <div className="">
                  <img src="./image/footer/express.svg" className="" alt="" />
                  <span className=" text-primaryText">امکان تحویل اکسپرس</span>
               </div>
               <div className="">
                  <img src="./image/footer/cash.svg" className="" alt="" />
                  <span className=" text-primaryText">امکان پرداخت در محل</span>
               </div>
               <div className="">
                  <img src="./image/footer/support.svg" className="" alt="" />
                  <span className=" text-primaryText">
                     7 روز هفته، 24 ساعته
                  </span>
               </div>
               <div className="">
                  <img src="./image/footer/days.svg" className="" alt="" />
                  <span className=" text-primaryText">هفت روز ضمانت کالا</span>
               </div>
               <div className="">
                  <img src="./image/footer/original.svg" className="" alt="" />
                  <span className=" text-primaryText">ضمانت اصل بودن کالا</span>
               </div>
            </div>

            {/* bg space */}
            <div className="bg-gray-300 h-2 w-full rounded-md mb-5"></div>

            {/* all things details & Shortcut Section */}
            <div className="mb-5 xl:mb-10 relative">
               <div className="mb-3 xl:mb-8 sticky top-0 right-0 left-0">
                  <div className="text-[11.5px] text-xs text-primaryLight flex gap-x-8 [&>*]:h-6 [&>*]:cursor-pointer overflow-x-auto">
                     {shortcuts.map((x, index) => (
                        <ShortcutSection {...x} key={index} />
                     ))}
                  </div>
                  <div className="bg-gray-300 h-[1px]"></div>
               </div>
               <div>
                  <p id="detail" className="mb-3">
                     مشخصات
                  </p>

                  <div className="flex flex-col gap-y-7 mb-6">
                     {itemDetails.map((x, index) => (
                        <AllDetailBox {...x} key={index} />
                     ))}
                  </div>

                  {/* bg space */}
                  <div className="bg-gray-300 xl:hidden h-1.5 w-full rounded-md"></div>
               </div>
            </div>

            {/* bg space */}
            <div className="hidden xl:block bg-gray-300 h-2 w-full rounded-md mb-12"></div>

            {/* comments   */}
            <div className="mb-5 xl:hidden" id="comment">
               <p className="text-[14px] font-semibold mb-6">دیدگاه‌ها</p>
               <div className="flex gap-x-5 items-start cursor-pointer">
                  <div>
                     <FaRegComment className="text-2xl" />
                  </div>
                  <div>
                     <p className="text-primaryText text-[14px] mb-3 font-semibold">
                        دیدگاه خود را درباره این کالا بنویسید
                     </p>
                     <p className="text-primaryLight text-[11.5px]">
                        با ثبت دیدگاه بر روی کالاهای خریداری شده ۵ امتیاز در
                        دیجی‌کلاب دریافت کنید
                     </p>
                  </div>
                  <span>
                     <FaChevronLeft fontSize={15} />
                  </span>
               </div>
            </div>

            {/* desktop comments  */}
            <div className="hidden xl:flex flex-col mb-3" id="comment">
               <h3 className="text-[17px] after-shop-btn h-7 text-black w-min mb-6">
                  دیدگاه‌ها
               </h3>

               <div className="flex items-start justify-start">
                  <div className=" flex flex-col w-[295px] text-primaryLight">
                     <p className="text-[10.5px] mb-1">
                        هنوز امتیازی ثبت نشده است
                     </p>
                     <div className="flex gap-x-1 text-xl mb-5 ">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                     </div>
                     <p className="text-[12.5px] mb-4">
                        شما هم درباره این کالا دیدگاه ثبت کنید
                     </p>

                     <button className="text-[12.5px] font-semibold text-primaryRed border border-primaryRed w-full rounded-global py-2 px-4 mb-5 hover:bg-primaryRed hover:text-white duration-300">
                        ثبت دیدگاه
                     </button>

                     <div className="flex items-start gap-x-2">
                        <MdInfoOutline className="text-2xl w-min cursor-pointer" />
                        <p className=" text-[12px]">
                           با ثبت دیدگاه بر روی کالاهای خریداری شده ۵ امتیاز در
                           دیجی‌کلاب دریافت کنید
                        </p>
                     </div>
                  </div>
                  <div className=" mr-12">
                     <p className="text-[15px] font-semibold mb-3">
                        شما هم می‌توانید در مورد این کالا نظر دهید.
                     </p>
                     <p className="text-[12px] text-primaryLight">
                        اگر این محصول را قبلا از دیجیکالا خریده باشید، دیدگاه
                        شما به عنوان خریدار ثبت خواهد شد. همچنین در صورت تمایل
                        می‌توانید به صورت ناشناس نیز دیدگاه خود را ثبت کنید
                     </p>
                  </div>
               </div>
            </div>

            {/* bg space */}
            <div className="hidden xl:block bg-gray-300 h-[3px] w-full rounded-full mb-6"></div>

            {/* desktop quiz  */}
            <div className="hidden xl:flex flex-col mb-4" id="quiz">
               <h3 className="text-[17px] after-shop-btn h-7 text-black w-min mb-6">
                  پرسش‌ها
               </h3>
               <div className=" flex flex-col  px-16">
                  <p className="text-[15.5px] mb-3">درباره این کالا چه پرسشی دارید؟</p>
                  <div className="border border-gray-400 h-20 rounded-global p-2 mb-1 cursor-text"
                  onClick={()=>inputRef.current.focus()}>
                     <input ref={inputRef} type="text" className="focus:outline-none text-start text-[15px] text-primaryLight w-full" value={quizIinput} onChange={(event)=>setQuizIinput(event.target.value)} maxLength={100} />
                  </div>
                  <span className="text-[12px] text-end mb-2">{quizIinput.length}/100</span>
                  <div className="text-end">
                     <button className={`text-[12px] py-2 px-4 text-white  rounded-global font-semibold ${quizIinput.length>0?'bg-primaryRed':'bg-gray-300'}`}>ثبت پرسش</button>
                  </div>
               </div>
            </div>

            {/* bg space */}
            <div className="bg-gray-300 h-1 w-full rounded-md mb-5"></div>

            {/* quiz */}
            <div className="flex items-center justify-between xl:hidden" id="quiz">
               <div className="flex items-center gap-x-5 text-[12px]">
                  <div>
                     <BsQuestionOctagon className="text-2xl" />
                  </div>
                  <p>پرسش و پاسخ</p>
               </div>
               <span>
                  <FaChevronLeft fontSize={15} />
               </span>
            </div>
         </div>

         <div className="mb-20"></div>
         {/* add to shop cart btn */}
         <div className="flex items-center justify-between bg-white fixed bottom-0 left-0 w-full border-t-[2px] border-gray-200 py-4 px-5 xl:hidden">
            <div className="w-1/2">
               <AddShopBtn />
            </div>
            <p className="font-semibold">
               445,000 <span className="text-[10px] font-semibold">تومان</span>
            </p>
         </div>

         {/* footer */}
         <Footer />
      </div>
   );
}
