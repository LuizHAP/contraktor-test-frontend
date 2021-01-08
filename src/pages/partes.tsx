import React from 'react'
import { Layout } from '@/components/templates'
import Table from '@/components/molecules/Table'
import Button from '@/components/atoms/Button'

const Partes: React.FC = () => {
  return (
    <Layout title="Partes - Contraktor">
      <Table />
      <Button href="/partes/novo" text="Adicionar um novo" />
    </Layout>
  )
}

export default Partes
