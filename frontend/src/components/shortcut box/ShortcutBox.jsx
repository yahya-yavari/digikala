import React from 'react'
import { Link } from 'react-router-dom';
export default function ShortcutBox({title,img,href}) {
  return (
    <Link to={href} className="">
    <div className="mb-1">
       <img src={img} alt="" />
    </div>
    <label htmlFor="" className=" flex  text-nowrap justify-center cursor-pointer ">
       {title}
    </label>
 </Link>
  )
}
