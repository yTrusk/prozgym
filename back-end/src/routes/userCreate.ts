import { FastifyInstance } from "fastify";
import { User } from "../interfaces/user.interface";
import { prisma } from "../server";

function userCreate(fastify: FastifyInstance){
    fastify.post<{Body: User}>("/user", async (req, res) => {
        const { user, password, email, cpf } = req.body;
        try{
            const existingUser = await prisma.user.findFirst({
                where: {
                    OR: [
                        { user: user },
                        { email: email },
                        { cpf: cpf }
                    ]
                }
            });
        
                    let fieldExists = null;

                    if (existingUser) {
                    if (existingUser.cpf === cpf) {
                        fieldExists = "CPF";
                    } else if (existingUser.email === email) {
                        fieldExists = "Email";
                    } else if (existingUser.user === user) {
                        fieldExists = "User";
                    }
                    }
                console.log(fieldExists)
            if(!fieldExists){
                const now = new Date();
                    const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1)
                    .toString()
                    .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")} ${now
                    .getHours()
                    .toString()
                    .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now
                    .getSeconds()
                    .toString()
                    .padStart(2, "0")}`;


                const data = await prisma.user.create({data:
                    {
                    user, password, email, cpf, createdAt: formattedDate
                }})
                console.log(data)
                return res.send({code: 201, content: "User created sucessful!"})
            }else{
                return res.send({code: 409, content: `Already have user with: ${fieldExists}`})
            }
        }catch (err){
            return res.code(500)
        }
    })
}

export default userCreate as any