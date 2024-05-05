import React, { useState } from "react";
import CategoryBuyBox from "./CategoryBuyBox";
export default function CategoryBuy() {
   const itemsArray = [
      { name: "موبایل", href: "", img: "./image/category buy/" },
      { name: "کالای دیجیتال", href: "", img: "./image/category buy/" },
      { name: "خانه و اشپزخانه", href: "", img: "./image/category buy/" },
      { name: "لوازم خانگی برقی", href: "", img: "./image/category buy/" },
      { name: "مد و پوشاک", href: "", img: "./image/category buy/" },
      { name: "طلا و جواهرات", href: "", img: "./image/category buy/" },
      { name: "زیبایی و سلامت", href: "", img: "./image/category buy/" },
      { name: "کارت هدیه", href: "", img: "./image/category buy/" },
      { name: "کالاهای سوپرمارکتی", href: "", img: "./image/category buy/" },
      { name: "کتاب،لوازم تحریر", href: "", img: "./image/category buy/" },
      { name: "اسباب بازی", href: "", img: "./image/category buy/" },
      { name: "ابزار آلات و تجهیزات", href: "", img: "./image/category buy/" },
      { name: "خودرو و موتورسیکلت", href: "", img: "./image/category buy/" },
      { name: "ورزش و سفر", href: "", img: "./image/category buy/" },
      { name: "محصولات بومی و محلی", href: "", img: "./image/category buy/" },
   ];

   return (
      <div className="text-center">
         <h3 className="mb-6 xl:mb-8 font-medium text-[18px] xl:text-[21px]">خرید بر اساس دسته بندی</h3>
         <div
            className="w-full grid  grid-cols-5 xl:grid-cols-none xl:grid-rows-2 xl:grid-flow-col
         gap-x-[100px] xl:gap-x-[80px] 
         gap-y-8 overflow-x-auto scrollbar-thin scrollbar-thumb-rounded-full   "
         >
            {itemsArray.map((item, index) => {
               return (
                  <CategoryBuyBox {...item} index={index + 1} key={index} />
               );
            })}
         </div>
      </div>
   );
}
