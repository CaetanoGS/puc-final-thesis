import { Response, response } from 'express';
import { IUser } from './interfaces/users.interface';
import { User } from '../../db/models/user.model';
import { DataTypes } from 'sequelize';
import { Wallet } from '../../db/models/wallet.model';

export class UserController implements IUser {

    constructor(
        private email: string,
        private password: string,
        private fullName?: string
    ) { }

    private async createWallet(userId: string): Promise<typeof Wallet | Error> {
        const walletResponse = await Wallet.findOne(
            {where: {userId: userId}}
        );
        if(walletResponse)
            return 
        
        return await Wallet.create(
            {
                userId: userId
            }
        );
        
    }

    async createUser(): Promise<typeof User | Error> {
        const userResponse = await User.findOne(
            { where: { email: this.email } }
        );
        if (userResponse) {
            const creationUserError = new Error("User already exists")
            return creationUserError.message
        }

        const user = await User.create(
            {
                fullName: this.fullName,
                email: this.email,
                password: this.password
            }
        );
        
        const wallet = await this.createWallet(user.id);

        return user
    }

    async login(): Promise<string | Error | Object> {
        const userResponse = await User.findOne(
            { where: { email: this.email } }
        );

        const invalidCredentialsError = new Error("Username or password is invalid.");


        if (!userResponse)
            return invalidCredentialsError.message;

        if (this.email == userResponse.email && this.password == userResponse.password)
            return { token: "fjdnkjfdfkjdfhdfkjbdfkjdfbdfkjdfbdkf" }

        return invalidCredentialsError.message;

    }
}