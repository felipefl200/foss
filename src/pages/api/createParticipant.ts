import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Prisma } from '@prisma/client'

const client = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  interface Participant {
    name: string
    email: string
    news: boolean
  }

  try {
    const data: Participant = req.body

    const response = await client.participant.create({ data })

    return res.status(201).json(response)

  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {

        return res.status(422).send({ message: 'Email informado já está cadastrado.' })

      }
    }
    return res.status(400).json(e)
  }

  // const data = JSON.parse(req.body)

  // const saveParticipant = await prismaClient.participant.create({ data })

  // res.json({saveParticipant})

}

