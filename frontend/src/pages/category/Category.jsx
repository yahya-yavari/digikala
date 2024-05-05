import React, { useEffect, useState, useRef } from "react";

import BottomNav from "../../components/bottom navigation/BottomNav";
import Header from "../../components/header/Header";
import CategoryTitleBox from "../../components/category box/CategoryTitleBox";

import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { CiCreditCard1, CiMobile2, CiShoppingBasket } from "react-icons/ci";
import { FaCar, FaHeartCircleCheck } from "react-icons/fa6";
import { GiCampingTent, GiHeartNecklace } from "react-icons/gi";
import { LuArmchair, LuBaby, LuPencilRuler } from "react-icons/lu";
import { MdLaptopChromebook } from "react-icons/md";
import { PiTShirtLight, PiX } from "react-icons/pi";
import { TbTool } from "react-icons/tb";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function Category() {
   const [items, setItems] = useState([
      { id: 1, title: "موبایل", Icon: HiDevicePhoneMobile, active: true },
      {
         id: 2,
         title: "کالای دیجیتال",
         Icon: MdLaptopChromebook,
         active: false,
      },
      { id: 3, title: "خانه و آشپزخانه", Icon: LuArmchair, active: false },
      {
         id: 4,
         title: "لوازم خانگی برقی",
         Icon: CgSmartHomeRefrigerator,
         active: false,
      },
      { id: 5, title: "مد و پوشاک", Icon: PiTShirtLight, active: false },
      {
         id: 6,
         title: "ساعت، طلا و جواهرات",
         Icon: GiHeartNecklace,
         active: false,
      },
      {
         id: 7,
         title: "زیبایی و سلامت",
         Icon: FaHeartCircleCheck,
         active: false,
      },
      { id: 8, title: "کارت هدیه", Icon: CiCreditCard1, active: false },
      {
         id: 9,
         title: "کالاهای سوپرمارکتی",
         Icon: CiShoppingBasket,
         active: false,
      },
      {
         id: 10,
         title: "کتاب، لوازم تحریر و هنر",
         Icon: LuPencilRuler,
         active: false,
      },
      {
         id: 11,
         title: "اسباب بازی، کودک و نوزاد",
         Icon: LuBaby,
         active: false,
      },
      { id: 12, title: "ابزار آلات و تجهیزات", Icon: TbTool, active: false },
      { id: 13, title: "خودرو و موتورسیکلت", Icon: FaCar, active: false },
      { id: 14, title: "ورزش و سفر", Icon: GiCampingTent, active: false },
   ]);
   const [activeItem, setActiveItem] = useState("موبایل");

   const activeH = (id) => {
      const newItem = items.filter((item) => {
         item.active = false;
         if (item.id === id) {
            item.active = true;
            setActiveItem(item.title);
         }
         return item;
      });
      setItems(newItem);
   };
   let navi = useNavigate();

   useEffect(() => {
      if (screen.width > 1280) {
         navi("/");
      }
   }, []);

   return (
      <div className="h-screen overflow-hidden">
         <Header />
         <div className="flex xl:hidden overflow-hidden h-[calc(100vh-120px)] relative">
            <div className="min-w-[95px] max-w-[95px] overflow-auto scrollbar-none text-[#3f4064] text-[11px] border-l top-0 right-0">
               {items.map((item) => {
                  return (
                     <CategoryTitleBox
                        key={item.id}
                        {...item}
                        id={item.id}
                        activeh={activeH}
                     />
                  );
               })}
            </div>

            <div className="w-[calc(100%-95px)] top-0 left-0 overflow-auto flex scrollbar-none flex-col gap-y-3">
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
               <div className="bg-blue-500 text-white text-[10px]">
                  شما دسته بندی{" "}
                  <span className="text-[14px] font-bold">!{activeItem}!</span>{" "}
                  را انتخاب کرده اید{" "}
               </div>
            </div>
         </div>
         <h1 className="hidden xl:block text-center ">این صفحه در حالت دسکتاپ ندارد و لطفا صفحه را رفرش کنید تا به صفحه اصلی منتقل شوید</h1>

         <BottomNav />
      </div>
   );
}
