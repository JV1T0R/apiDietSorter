import { fastify } from 'fastify'
import { DatabaseController } from './database/dbController.js'

const server = fastify()

const database = new DatabaseController()

server.get('/', async (request, reply) => {

    const almoco = await database.gerarAlmoço()
    return reply.status(200).send(almoco)
})

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 5500,
})