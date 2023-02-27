import { Router } from 'express';
import { UserController } from '../controllers/users/user.controller';
import { User } from '../db/models/user.model';

export const userRoutes1 = Router();

userRoutes1.post('/signup', async (req, res) => {

    let user = new UserController(
        req.body.email,
        req.body.password,
        req.body.fullName
    )

    const userResponse = await user.createUser();

    if (typeof userResponse != User){
        return res.status(400).send(userResponse);
    }
    return res.status(201).send(userResponse);
    
});

