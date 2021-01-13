import React from 'react'
import { Layout } from '@/components/templates'
import { TableParties } from '@/components/molecules'
import { Button } from '@/components/atoms'

import Part from '@/types/part'

import axios from 'axios'
interface Props {
  allParties: Part[]
}

const Partes = ({ allParties }: Props) => {
  return (
    <Layout title="Partes - Contraktor">
      {allParties ? (
        <TableParties data={allParties} />
      ) : (
        <h1 className="text-xl leading-none font-extrabold tracking-tight text-gray-900 sm:text-1xl lg:text-2xl m-10">
          Nenhuma parte encontrada
        </h1>
      )}
      <Button href="/partes/novo" text="Adicionar um novo" textSize={1} />
    </Layout>
  )
}

export default Partes

export const getStaticProps = async () => {
  const allParties = await axios.get('http://localhost:3000/parties')

  return {
    props: allParties.data
  }
}
