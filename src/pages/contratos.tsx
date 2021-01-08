import React from 'react'
import { Layout } from '@/components/templates'
import Table from '@/components/molecules/Table'
import Button from '@/components/atoms/Button'

const Contratos: React.FC = () => {
  return (
    <Layout title="Contratos - Contraktor">
      <Table />
      <Button href="/contratos/novo" text="Adicionar um novo" />
    </Layout>
  )
}

export default Contratos
