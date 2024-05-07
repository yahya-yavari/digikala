import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { HiOutlineLogin } from "react-icons/hi";
import BottomNav from "../../components/bottom navigation/BottomNav";
import { apiCall } from "../../utils/Axios";

export default function Login() {

   const [phone, setPhone] = useState("");

   const navigating = useNavigate();

   useEffect(() => {
      const loggedInUser = localStorage.getItem("access");
      if (loggedInUser) {
         return navigating('/')
      }
   })

   const login = async (phone) => {
      try {

         const { data, status } = apiCall.post("user/token/", { phone })

         if (status === 200) {
            // localStorage.setItem("access", data.access)
            // localStorage.setItem("refresh", data.refresh)
            alert("کد تایید شما ارسال شد")
         }
      } catch (error) {
         alert(error);
      }
   }

   const handleLogin = (e) => {

      e.preventDefault();

      const { data, error } = login(phone);

      if (!error) {
         return navigating('/otp')
      }
      else {
         return navigating('/login')
      }
   }

   return (
      <>
         <div className="flex items-center justify-center h-screen text-primaryText">
            <form onSubmit={handleLogin} className="flex flex-col p-5 w-full xl:p-8 xl:w-[420px] xl:border-[1px] rounded-global border-slate-300">
               <div className="w-full mb-6  flex justify-center">
                  <img
                     src="./image/logo.svg"
                     width="155px"
                     className=""
                     alt=""
                  />
               </div>

               <div className="flex rounded-global justify-start gap-x-2 items-center font-extrabold text-lg text-black mb-5">
                  <div>ورود</div>
                  <div className="h-6 bg-[#0c0c0c] w-[3px] rounded-2xl"></div>
                  <div>ثبت نام</div>
               </div>

               <p className="mb-3">ثبت نام/ورود</p>

               <div className="mb-6">
                  <label className="">لطفاشماره تلفن خود را وارد کنید</label>
                  <input
                     onChange={(e) => setPhone(e.target.value)}
                     className="w-full bg-primaryB rounded-global p-2.5 border-b-[2px] border-b-primaryRed
                  focus:ring-blue-400 focus:ring-2 focus:border-0 focus:outline-none duration-100 mt-1 mb-0.5"
                     type="number"
                     name="phone"
                     id=""
                  />
                  <span className="text-primaryRed">
                     لطفا این قسمت را خالی نگذارید
                  </span>
               </div>

               <div className="p-2 bg-primaryRed rounded-global mb-4">
                  <button
                     type="submit"
                     className="w-full text-lg font-bold text-white"
                  >
                     ورود
                  </button>
               </div>
               <p className="text-xs">
                  ورود شما به معنای پذیرش{" "}
                  <Link className="text-blue-400">شرایط دیجی‌کالا </Link>و
                  <Link className="text-blue-400">قوانین و حریم‌ خصوصی</Link>{" "}
                  است
               </p>
            </form>
         </div>
         <BottomNav />
      </>
   );
}
