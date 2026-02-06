import { error } from "node:console";
import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'
import { id } from "zod/v4/locales";

interface CreateUserProps {
    name: string;
    email: string;
    password: string;
}


class CreateUserService{
    async execute({ name, email, password}: CreateUserProps){


        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })        

        if(userAlreadyExists){
            throw new Error("Usuário já existente!")
        }


        const passwordhash = await hash(password, 8);


        const user = await prismaClient.user.create({
            data:{
                name: name, 
                email: email,
                password: passwordhash,
            },
            select:{
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
            },
        });

        return user; 
    }
}

export {CreateUserService}