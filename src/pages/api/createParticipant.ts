import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Prisma } from '@prisma/client'
import { z } from 'zod'

const client = new PrismaClient()

const InputParticipant = z.object({
  name: z.string().min(2, { message: 'É necessário mínimo 2 caracteres' }).trim(),
  email: z.string().email({ message: 'Email inválido' }).trim(),
  news: z.boolean().default(false)
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const data = InputParticipant.parse(req.body)

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

}

