import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Category() {
   const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3150,
      cssEase: "linear",
      rtl: true,
   };
   return (
      <>
         <div className="xl:hidden ">
            <Slider {...settings} className="overflow-hidden">
               <Link to={"/product"}>
                  <img src="./image/category-slider/2.jpg" />
               </Link>
               <Link to={"/product"}>
                  <img src="./image/category-slider/3.webp" />
               </Link>
               <Link to={"/product"}>
                  <img src="./image/category-slider/4.webp" />
               </Link>
               <Link to={"/product"}>
                  <img src="./image/category-slider/1.gif" />
               </Link>
            </Slider>
         </div>

         <div className="hidden xl:block h-[400px] w-full bg-blue-500 justify-center items-center">
            <Slider {...settings} className="h-full overflow-hidden">
               <Link to={"/product"}>
                  <img src="./image/category-slider/2-d.webp" className="h-[400px]"  />
               </Link>
               <Link to={"/product"}>
                  <img src="./image/category-slider/3-d.webp" className="h-[400px]"  />
               </Link>
               <Link to={"/product"}>
                  <img src="./image/category-slider/4-d.webp" className="h-[400px]"  />
               </Link>
               <Link to={"/product"}>
                  <img src="./image/category-slider/1-d.gif" className="h-[400px]"  />
               </Link>
            </Slider>
         </div>
      </>
   );
}
