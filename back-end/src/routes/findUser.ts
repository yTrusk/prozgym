import { FastifyInstance } from "fastify";
import { User } from "../interfaces/user.interface";
import { prisma } from "../server";

function userLogin(fastify: FastifyInstance) {
  fastify.post<{ Body: User }>("/userlg", async (req, res) => {
    const { user, password } = req.body;
    try {
      const existingUser = await prisma.user.findUnique({
        where: { user: user },
      });
      console.log(user)
      if (existingUser) {
        if (password == existingUser.password) {
          res.send({ code: 200, content: "User logged sucessful!" });
        } else {
          res.send({ code: 400, content: "Incorrect Data" });
        }
      } else {
        res.send({ code: 400, content: "Incorrect Data" });
      }
    } catch (err) {
      return res.code(500);
    }
  });
}

export default userLogin as any;
