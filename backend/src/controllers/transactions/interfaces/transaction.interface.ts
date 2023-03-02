import Response from 'express';
import { Transaction } from '../../../db/models/transactions.model';

export interface ITransaction{
    getTransaction(): Promise<[typeof Transaction]|Error>
    getTransactionById(transactionId: string): Promise<typeof Transaction|Error>
    createTransaction(value: number, type: string): Promise<typeof Transaction|Error>
    updateTransaction(transactionId: string, value: number, type: string): Promise<typeof Transaction|Error>
    deleteTransaction(transactionId: string): Promise<void|string>
}