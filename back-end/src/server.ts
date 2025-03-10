import { PrismaClient } from "@prisma/client";
import Fastify, { FastifyInstance } from "fastify";
import userCreate from "./routes/userCreate";
import cors from "@fastify/cors";
import userLogin from "./routes/findUser";
const app: FastifyInstance = Fastify({ logger: true });
export const prisma = new PrismaClient();
prisma.$connect().then(() => {
  console.log("DATABASE CONNECTED!");
});
app.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "UPDATE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});
app.register(userCreate);
app.register(userLogin);
app.listen({ port: 3333 }).then(() => {
  console.log("App running on port http://localhost:3333");
});
