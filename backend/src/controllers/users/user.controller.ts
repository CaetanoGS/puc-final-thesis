import { Response, response } from 'express';
import { IUser } from './interfaces/users.interface';
import { User } from '../../db/models/user.model';

export class UserController implements IUser {

    constructor(
        private email: string,
        private password: string,
        private fullName?: string
    ) { }

    async createUser(): Promise<typeof User | Error> {
        const userResponse = await User.findOne(
            { where: { email: this.email } }
        );
        if (userResponse) {
            const creationUserError = new Error("User already exists")
            return creationUserError.message
        }

        return await User.create(
            {
                fullName: this.fullName,
                email: this.email,
                password: this.password
            }
        );
    }

    async login(): Promise<Error | Object> {
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