import { Router } from 'express';

export const walletRoutes = Router();

walletRoutes.get('/wallets/:id', (req, res) => {
    res.send("Retrieve wallet");
});

walletRoutes.post('/wallets', (req, res) => {
    res.send("Create wallet");
});