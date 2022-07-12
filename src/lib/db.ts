import { prismaClient, prisma } from "./prisma"

export interface Participant {
    id: number
    name: string
    email: string
    news: boolean
}


export async function getAllTodos() {
    const data = await prismaClient.participant.findMany()
    return data
}


export async function createParticipant({ name, email, news = false }: Participant) {
    await prismaClient.participant.create({
        data: {
            name,
            email,
            news
        }
    })
}