import { Response, response } from 'express';
import { IUser } from './interfaces/users.interface';
import { User } from '../../db/models/user.model';
import { DataTypes } from 'sequelize';
import { Wallet } from '../../db/models/wallet.model';
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserController implements IUser {

    constructor(
        private email: string,
        private password: string,
        private fullName?: string
    ) { }

    private async createWallet(userId: string): Promise<typeof Wallet | Error> {
        const walletResponse = await Wallet.findOne(
            { where: { userId: userId } }
        );
        if (walletResponse)
            return

        return await Wallet.create(
            {
                userId: userId
            }
        );

    }

    async createUser(): Promise<typeof User | Error> {
        const saltRounds = 10;
        const userResponse = await User.findOne(
            { where: { email: this.email } }
        );
        if (userResponse) {
            const creationUserError = new Error("User already exists")
            return creationUserError.message
        }


        const hashedPassword = await new Promise((resolve, reject) => {
            bcrypt.hash(this.password, saltRounds, function (err, hash) {
                if (err) reject(err)
                resolve(hash)
            });
        })

        const user = await User.create(
            {
                fullName: this.fullName,
                email: this.email,
                password: hashedPassword
            }
        );

        await this.createWallet(user.id);

        return {
            id: user.id,
            fullName: user.fullName,
            email: user.email
        }
    }

    async getUserIdByEmail(): Promise<string | null> {
        const userResponse = await User.findOne(
            { where: { email: this.email } }
        );
        if (userResponse)
            return userResponse.id;
        return null;

    }

    async login(): Promise<Object | string> {
        const userResponse = await User.findOne(
            { where: { email: this.email } }
        );

        const invalidCredentialsError = new Error("Username or password is invalid.");


        if (!userResponse)
            return invalidCredentialsError.message;

        if (this.email == userResponse.email) {
            const isPasswordCorrect = await new Promise((resolve, reject) => {
                bcrypt.compare(this.password, userResponse.password, function (err, result) {
                    if(err)
                        reject(err);
                    resolve(result);
    
                });
            })

            if (isPasswordCorrect) {
                const token = jwt.sign(
                    {name: this.email}, 
                    process.env.DOCA_TOKEN_JWT, 
                    {expiresIn: 60*60}
                ) 
                return { 
                    token: token
                }
            }
        }
        return invalidCredentialsError.message;
    }
}