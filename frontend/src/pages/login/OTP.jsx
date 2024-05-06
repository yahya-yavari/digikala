import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { apiCall } from "../../utils/Axios";

function OTP() {

    const [OTP, setOTP] = useState("");

    const navigator = useNavigate();

    const fetchOTP = async (OTP) => {
        try {

            const { data, status } = apiCall.post("user/otp/", { OTP })

            if (status === 200) {
                localStorage.setItem("access", data.access)
                localStorage.setItem("refresh", data.refresh)
                alert("خوش آمدید")
            }

        } catch (error) {
            alert(error)
        }
    }

    const handlesubmit = () => {
        const { data, error } = fetchOTP(OTP)

        if (!error) {
            return navigator("/")
        }

    }

    return (
        <>
            <div className="flex items-center justify-center h-screen text-primaryText">
                <form onSubmit={handlesubmit} className="flex rounded-global justify-start gap-x-2 items-center font-extrabold text-lg text-black mb-5">
                    <div className="mb-6">
                        <label className="">رمز تایید را وارد نمایید</label>
                        <input
                            onChange={(e) => setOTP(e.target.value)}
                            className="w-full bg-primaryB rounded-global p-2.5 border-b-[2px] border-b-primaryRed
                  focus:ring-blue-400 focus:ring-2 focus:border-0 focus:outline-none duration-100 mt-1 mb-0.5"
                            type="phone"
                            name=""
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
                </form>
            </div>
        </>
    )
}

export default OTP
