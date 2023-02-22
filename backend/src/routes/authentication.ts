import { Router } from 'express';

export const authenticationRoutes = Router();


authenticationRoutes.post('/sign-in', (req, res) => {
    res.send("Get token users");
});