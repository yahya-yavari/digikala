import React from "react";
import ShortcutBox from "../shortcut box/ShortcutBox";

export default function Shortcut() {
   const shortcutsArray = [
      { href: "/", title: "دیجی‌کالا جت", img: "/image/2/jet.png" },
      { href: "/", title: "دیجی‌پی", img: "/image/2/digip.png" },
      { href: "/", title: "حراج استایل", img: "/image/2/haraj.png" },
      { href: "/", title: "حراج ماه رمضان", img: "/image/2/ramezan.png" },
      { href: "/", title: "موبایل کارکرده", img: "/image/2/mobile.png" },
      { href: "/", title: "خرید چکی", img: "/image/2/kharid.png" },
      { href: "/", title: "گیم نت", img: "/image/2/game.png" },
   ];

   return (
      <div className="grid grid-cols-4 xl:grid-cols-8 justify-items-center   w-full  gap-y-8  [&>*]:w-[52px] [&>*]:h-[52px] xl:[&>*]:w-[56px] xl:[&>*]:h-[56px] [&>*]:text-[10px] xl:[&>*]:text-[14px] [&>*]:text-primaryText">
         {shortcutsArray.map((items,index) => {
            return (
               <div key={index} className="">
                  <ShortcutBox {...items} />
               </div>
            );
         })}
         <button className=" flex items-center justify-center rounded-full bg-[#f0f0f1] !w-14 !h-14 hover:ring-2 ring-offset-4 ring-offset-red-100 ring-primaryRed duration-300">
            بیشتر
         </button>
      </div>
   );
}
