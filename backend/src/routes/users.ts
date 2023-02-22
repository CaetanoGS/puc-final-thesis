import { Router } from 'express';

export const userRoutes = Router();


userRoutes.get('/users/:id', (req, res) => {
    res.send("Retrieve users");
});

userRoutes.post('/users', (req, res) => {
    res.send("Create users");
});