
import React from 'react'

import Link from 'next/link'

interface ButtonProps {
  href: string
  text: string
  textSize: number
}

const Button: React.FC<ButtonProps> = ({ href, text, textSize }) => {
  return (
    <Link href={href}>
      <a className="relative p-5 bg-green-500 rounded-xl cursor-pointer hover:bg-green-300 transition flex items-center justify-center">
        <h2 className={`leading-none font-extrabold tracking-tight lg:text-${textSize}xl text-white`}>
          {text}
        </h2>
      </a>
    </Link>
  )
}

export default Button
