import { Router } from 'express';
import { UserController } from '../controllers/users/user.controller';
import { User } from '../db/models/user.model';
import { isObject } from 'util';

export const authenticationRoutes = Router();


authenticationRoutes.post('/signin', async (req, res) => {

    let user = new UserController(
        req.body.email,
        req.body.password
    )

    const userResponse = await user.login();

    if (isObject(userResponse))
        return res.status(201).send(userResponse);
    return res.status(400).send(userResponse);

});