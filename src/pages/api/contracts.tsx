import { connectToDatabase } from '@/config/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  const { db, client } = await connectToDatabase()

  if (client.isConnected()) {
    switch (method) {
      case 'GET':
        try {
          const contracts = await db.collection('contracts').find()
          res.status(200).json({ success: true, data: contracts })
        } catch (error) {
          res.status(404).json({ error: 'Nenhum contrato encontrado' })
        }
        break
      case 'POST':
        try {
          const contract = await db.collection('contracts').create(req.body)

          res.status(201).json({ success: true, data: contract })
        } catch (error) {
          res.status(400).json({
            success: false,
            error: 'Ocorreu um erro ao enviar o cadastro'
          })
        }
        break
      default:
        res
          .status(400)
          .json({ success: false, error: 'Validar conexão com a API' })
        break
    }
  }

  return res.status(500).json({ error: 'client DB is not connected' })
}
