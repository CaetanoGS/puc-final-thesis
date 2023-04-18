import { User } from "@prisma/client";
import prisma from "../prisma/prisma";
import dotenv from 'dotenv';

dotenv.config();

export async function getUserByUsername(username: string): Promise<User> {

    try {
        return await prisma.user.findUnique(
            {
                where: {
                    email: username
                }
            }
        );
    } catch (error) {
        console.error(error)
        return null;
    }
}