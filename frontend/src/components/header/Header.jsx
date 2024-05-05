import React from 'react'
import Search from '../global search/search'

export default function Header() {
  return (
    <div className='w-full xl:w-full p-2 text-nowrap flex flex-col items-center xl:mb-10 sticky top-0 z-10  bg-white border-b-2 mb-3'>
      <Search/>
    </div>
  )
}
