import React from 'react'

import Link from 'next/link'

interface ButtonProps {
  href: string
  text: string
}

const Button: React.FC<ButtonProps> = ({ href, text }) => {
  return (
    <Link href={href}>
      <button className="uppercase px-8 py-2 rounded-full bg-gray-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">
        {text}
      </button>
    </Link>
  )
}

export default Button
