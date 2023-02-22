import { Router } from 'express';

export const transationRoutes = Router();


transationRoutes.get('/transactions', (req, res) => {
    res.send("List transations");
});

transationRoutes.get('/transactions/:id', (req, res) => {
    res.send("Retrieve transation");
});

transationRoutes.post('/transactions', (req, res) => {
    res.send("Create transation");
});


transationRoutes.put('/transactions/:id', (req, res) => {
    res.send("Update transation");
});

transationRoutes.delete('/transactions/:id', (req, res) => {
    res.send("Delete transation");
});