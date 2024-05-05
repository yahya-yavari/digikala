import React from "react";
import { Link } from "react-router-dom";
import OffBox from "./OffBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Off() {
   const itemsArray = [
      {
         href: "",
         img: "/image/3/1.webp",
         price: 45205,
         off: 15,
         priceF: 70700,
      },
      {
         href: "",
         img: "/image/3/5.webp",
         price: 25205,
         off: 25,
         priceF: 99000,
      },
      {
         href: "",
         img: "./image/3/2.webp",
         price: 36540,
         off: 25,
         priceF: 80200,
      },
      {
         href: "",
         img: "./image/3/3.webp",
         price: 42150,
         off: 36,
         priceF: 70700,
      },
      {
         href: "",
         img: "./image/3/4.webp",
         price: 55840,
         off: 45,
         priceF: 74000,
      },
      {
         href: "",
         img: "./image/3/7.webp",
         price: 14230,
         off: 85,
         priceF: 30540,
      },
      {
         href: "",
         img: "./image/3/8.webp",
         price: 80000,
         off: 10,
         priceF: 140000,
      },
   ];

   return (
      <div className="flex">
         <div className="w-full flex justify-center xl:gap-x-1  text-primaryText overflow-auto  xl:scrollbar-thin scrollbar-thumb-rounded-full">
            <div className="min-w-[145px] max-w-[170px] mr-2 h-[235px] xl:h-[260px] flex-col items-center justify-center hidden xl:flex">
               <img
                  src="./image/3/Amazings (1).svg"
                  className=" w-[90px] h-[75px]"
                  alt=""
               />
               <img src="./image/3/box.webp" className="" alt="" />
               <Link to={"all-off"} className="text-sm text-white">
                  مشاهده همه
               </Link>
            </div>

            {itemsArray.map((item, index) => {
               return <OffBox {...item} key={index} />;
            })}
         </div>
      </div>

      // <Swiper spaceBetween={0}  slidesPerView={6} className="flex justify-center w-full">
      //    <SwiperSlide className="bg-blue-300  !w-44 ">15</SwiperSlide>
      //    <SwiperSlide>15</SwiperSlide>
      //    <SwiperSlide>15</SwiperSlide>
      //    <SwiperSlide>15</SwiperSlide>
      //    <SwiperSlide>15</SwiperSlide>
      // </Swiper>
   );
}
