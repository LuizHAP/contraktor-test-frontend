import React from 'react'

import Link from 'next/link'

interface CardProps {
  href: string
  text: string
}

const Card: React.FC<CardProps> = ({ href, text }) => {
  return (
    <Link href={href}>
      <div className="relative h-20 md:h-30 bg-green-500 rounded-xl cursor-pointer hover:bg-green-300 transition flex items-center justify-center">
        <h2 className="leading-none font-extrabold tracking-tight lg:text-3xl text-white">
          {text}
        </h2>
      </div>
    </Link>
  )
}

export default Card
