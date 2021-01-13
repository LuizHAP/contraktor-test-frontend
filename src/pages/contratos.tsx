import React from 'react'
import { Layout } from '@/components/templates'
import { TableContracts } from '@/components/molecules'
import { Button } from '@/components/atoms'

import Contract from '@/types/contract'

import axios from 'axios'

interface Props {
  allContracts: Contract[]
}

const Contratos = ({ allContracts }: Props) => {
  return (
    <Layout title="Contratos - Contraktor">
      {allContracts ? (
        <TableContracts data={allContracts} />
      ) : (
        <h1 className="text-xl leading-none font-extrabold tracking-tight text-gray-900 sm:text-1xl lg:text-2xl m-10">
          Nenhum contrato encontrado
        </h1>
      )}
      <Button href="/contratos/novo" text="Adicionar um novo" textSize={1} />
    </Layout>
  )
}

export default Contratos

export const getStaticProps = async () => {
  const allContracts = await axios.get('/api/contracts')

  return {
    props: allContracts.data
  }
}
