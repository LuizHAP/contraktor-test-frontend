import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="flex flex-col justify-center md:justify-around items-center py-2 md:py-4 shadow-md md:flex-row">
      <Link href="/">
        <Image
          src="/img/contraktor.png"
          width={200}
          height={33}
          className="px-3 cursor-pointer"
        />
      </Link>

      <nav className="flex flex-wrap space-x-8 my-3 md:block md:flex-nowrap ">
        <Link href="/contratos">
          <a className="tracking-wide hover:text-gray-300">Contratos</a>
        </Link>
        <Link href="/partes">
          <a className="tracking-wide hover:text-gray-300">Partes</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
