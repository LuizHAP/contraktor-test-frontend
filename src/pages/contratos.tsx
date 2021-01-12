import React from 'react'
import { Layout } from '@/components/templates'
import { TableContracts } from '@/components/molecules'
import { Button } from '@/components/atoms'

import Contract from '@/types/contract'

import api from '@/services/api'

import { NextPage } from 'next'

interface Props {
  contracts: Contract[]
}

const Contratos: NextPage<Props> = ({ contracts }) => {
  return (
    <Layout title="Contratos - Contraktor">
      <TableContracts data={contracts} />
      <Button href="/contratos/novo" text="Adicionar um novo" textSize={1} />
    </Layout>
  )
}

Contratos.getInitialProps = async ({ req }) => {
  const res = await api('/contracts')

  return {
    contracts: res.data || null
  }
}

export default Contratos
