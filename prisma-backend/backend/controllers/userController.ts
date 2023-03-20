import { User } from "@prisma/client";
import prisma from "../prisma/prisma";
import bcrypt from "bcrypt"

export async function registerNewUser(username: string, password: string, name: string): Promise<User> {

    try {
        const hashedPwd = await bcrypt.hash(password, 10);
        const createdUser = await prisma.user.create(
            {
                data: {
                    email: username,
                    password: hashedPwd,
                    name: name
                }
            }
        );
        await prisma.wallet.create(
            {
                data: {
                    userId: createdUser.id
                }
            }
        );
        return createdUser;
    } catch (error) {
        return null;
    }
}