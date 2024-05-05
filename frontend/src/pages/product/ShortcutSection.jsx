import React from 'react'

export default function ShortcutSection({title , active , href}) {
  return (
    <a href={href}  className={`${active&&'after-shop-btn'}`}>{title}</a>
  )
}
