import { fastify } from 'fastify'
import { DatabaseController } from './database/dbController.js'

const server = fastify()

const database = new DatabaseController()

server.get('/', async (request) => {

    const almoco = await database.gerarAlmoço()

    return almoco
})

server.listen({
    port: process.env.PORT ?? 5500,
})