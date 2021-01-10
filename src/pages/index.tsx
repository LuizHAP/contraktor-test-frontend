import React from 'react'
import { Layout } from '@/components/templates'
import { Button } from '@/components/atoms'

const Home: React.FC = () => {
  return (
    <Layout title="Home - Contraktor" home>
      <h1 className="text-5xl mt-10 leading-none font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl md:mt-24">
        Contraktor CRUD
      </h1>

      <div className="w-2/3 grid grid-cols-1 grid-rows-2 gap-4 mt-10 md:grid-cols-2 md:grid-rows-1 md:mt-24">
        <Button href={'/contratos'} text="Contratos" textSize={4} />
        <Button href={'/partes'} text="Partes" textSize={4}/>
      </div>
    </Layout>
  )
}

export default Home
