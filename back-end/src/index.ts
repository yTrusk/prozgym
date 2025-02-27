import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";

const app = Fastify({})
const prisma = new PrismaClient()

app.get('/', (req, res) => {
    
})


app.listen({port: 3333, }).then(() => {
    console.log('App running on port http://localhost:3333')
})