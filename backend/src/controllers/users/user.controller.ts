import { Response, response } from 'express';
import { IUser } from './interfaces/users.interface';
import { User } from '../../db/models/user.model';

export class UserController implements IUser {

    constructor(
        private email: string,
        private password: string,
        private fullName?: string
    ) { }

    async createUser() {
        const userResponse = await User.findOne(
            { where: { email: this.email } }
        );
        if (userResponse)
            return response.status(400).send("User already exists.");

        const user = User.build(
            {
                fullName: this.fullName,
                email: this.email,
                password: this.password
            }
        );
        const response1 = await user.save();
        console.log(response1)
        return response.status(201);
    }

    async login(): Promise<Response> {
        const userResponse = await User.findOne(
            { where: { email: this.email } }
        );
        if (!userResponse)
            return response.status(404).send("User does not exist.");

        if (this.email == userResponse.email && this.password == userResponse.password)
            return response.status(200).send(
                { token: "fjdnkjfdfkjdfhdfkjbdfkjdfbdfkjdfbdkf" }
            );
        
        return response.status(400).send({ "detail": "User does not exist" });

    }
}