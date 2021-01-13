import { connectToDatabase } from '@/config/mongodb'
import { NowRequest, NowResponse } from '@vercel/node'

export default async (req: NowRequest, res: NowResponse) => {
  const { method } = req

  const { db, client } = await connectToDatabase()

  if (client.isConnected()) {
    switch (method) {
      case 'GET':
        try {
          const parties = await db.collection('parties').find({})
          res.status(200).json({ success: true, data: parties })
        } catch (error) {
          res.status(200).json({ error: 'Nenhum contrato encontrado' })
        }
        break
      case 'POST':
        try {
          const parties = await db.collection('parties').insertOne(req.body)
          res.status(201).json({ success: true, data: parties })
        } catch (error) {
          console.log(error)
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
}
