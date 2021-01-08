import React from 'react'
import { Layout } from '@/components/templates'
import TableParties from '@/components/molecules/TableParties'
import Button from '@/components/atoms/Button'

const Partes: React.FC = () => {
  const parties = [
    {
      id: 1,
      name: 'Wasif',
      lastname: 'Teste',
      email: 'wasif@email.com',
      cpf: '005.914.580-39',
      telefone: '11111111'
    },
    {
      id: 2,
      name: 'Ali',
      lastname: 'Teste',
      email: 'ali@email.com',
      cpf: '005.914.580-39',
      telefone: '11111111'
    },
    {
      id: 3,
      name: 'Saad',
      lastname: 'Teste',
      email: 'saad@email.com',
      cpf: '005.914.580-39',
      telefone: '11111111'
    },
    {
      id: 4,
      name: 'Asad',
      lastname: 'Teste',
      email: 'asad@email.com',
      cpf: '005.914.580-39',
      telefone: '11111111'
    }
  ]

  return (
    <Layout title="Partes - Contraktor">
      <TableParties data={parties} />
      <Button href="/partes/novo" text="Adicionar um novo" />
    </Layout>
  )
}

export default Partes
