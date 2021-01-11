import React from 'react'
import { Layout } from '@/components/templates'
import { TableContracts } from '@/components/molecules'
import { Button } from '@/components/atoms'

const Contratos: React.FC = () => {
  const contracts = [
    {
      id: 1,
      title: '1231241',
      initialDate: '06/12/2020',
      dueDate: '06/12/2020',
      file: 'CAMINHO.PDF'
    }
  ]

  return (
    <Layout title="Contratos - Contraktor">
      <TableContracts data={contracts} />
      <Button href="/contratos/novo" text="Adicionar um novo" />
    </Layout>
  )
}

export default Contratos
