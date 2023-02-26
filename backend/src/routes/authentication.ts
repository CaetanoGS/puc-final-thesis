import { Router, response } from 'express';
import { UserController } from '../controllers/users/user.controller';

export const authenticationRoutes = Router();


authenticationRoutes.post('/sign-in', async (req, res) => {

    let user = new UserController(
        req.body.email,
        req.body.password,
        req.body.fullName
    )

    return await user.createUser();
    
});