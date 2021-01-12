import { connectToDatabase } from '@/config/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method
  } = req

  const { db, client } = await connectToDatabase()

  if (client.isConnected()) {
    switch (method) {
      case 'GET':
        try {
          const contract = await db.collection('contracts').findById(id)

          if (!contract) {
            return res.status(400).json({
              success: false,
              error: 'Não foi encontrado contrato com esse id'
            })
          }

          res.status(200).json({ success: true, data: contract })
        } catch (error) {
          res.status(400).json({ error: 'Nenhum contrato encontrado' })
        }
        break
      case 'PUT':
        try {
          const contract = await db
            .collection('contracts')
            .findByIdAndUpdate(id, req.body, {
              new: true,
              runValidators: true
            })

          if (!contract) {
            return res.status(400).json({
              success: false,
              error: 'Não foi possível atualizar o cadastro'
            })
          }

          res.status(200).json({ success: true, data: contract })
        } catch (error) {
          res.status(400).json({
            success: false,
            error: 'Não foi possível atualizar o cadastro'
          })
        }
        break
      case 'DELETE':
        try {
          const deletedNote = await await db
            .collection('contracts')
            .deleteOne({ _id: id })

          if (!deletedNote) {
            return res.status(400).json({
              success: false,
              error: 'Não foi possível deletar o Contrato'
            })
          }

          res.status(200).json({ success: true, data: {} })
        } catch (error) {
          res.status(400).json({
            success: false,
            error: 'Não foi possível deletar o Contrato'
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
