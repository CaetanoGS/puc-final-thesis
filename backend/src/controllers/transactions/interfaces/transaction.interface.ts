import Response from 'express';

export interface ITransaction{
    getTransaction(): Promise<Response|Error>
    getTransactionById(transactionId: string): Promise<Response|Error>
    createTransaction(): Promise<Response|Error>
    updateTransaction(transactionId: string): Promise<Response|Error>
    deleteTransaction(transactionId: string): Promise<Response|Error>
}