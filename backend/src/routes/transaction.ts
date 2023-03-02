import { Router } from 'express';
import { TransactionController } from '../controllers/transactions/transaction.controller';
import { Transaction } from '../db/models/transactions.model';
import { isObject } from 'util';

export const transationRoutes = Router();


transationRoutes.get('/transactions', async (req, res) => {
    const controller = new TransactionController()
    
    const transactions = await controller.getTransaction();

    return res.status(200).send(transactions);
});

transationRoutes.get('/transactions/:id', async (req, res) => {
    const controller = new TransactionController()
    
    const transaction = await controller.getTransactionById(req.params.id);

    if (!isObject(transaction))
        return res.status(404).send(transaction)
    
    return res.status(200).send(transaction);
});

transationRoutes.post('/transactions', async (req, res) => {
    const value = req.body.value;
    const type = req.body.type;
    const userId = req.body.userId

    const controller = new TransactionController()
    
    const transaction = await controller.createTransaction(value, type, userId);
    if (!isObject(transaction))
        return res.status(400).send(transaction)
    
    return res.status(201).send(transaction);
});


transationRoutes.put('/transactions/:id', async (req, res) => {
    const value = req.body.value;
    const type = req.body.type;
    const transactionId = req.params.id

    const controller = new TransactionController()
    
    const transaction = await controller.updateTransaction(transactionId, value, type);

    if (!isObject(transaction))
        return res.status(400).send(transaction)
    
    return res.status(200).send(transaction);
});

transationRoutes.delete('/transactions/:id', async (req, res) => {
    const transactionId = req.params.id

    const controller = new TransactionController()
    
    const transaction = await controller.deleteTransaction(transactionId);
    
    return res.status(204).send(transaction);
});