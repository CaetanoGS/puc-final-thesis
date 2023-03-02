import { ITransaction } from './interfaces/transaction.interface';
import { Transaction } from '../../db/models/transactions.model';

export const possibleTransactionTypes = ["debit", "credit"]

export class TransactionController implements ITransaction {

    async getTransaction(): Promise<typeof Transaction| null> {
        return await Transaction.findAll();
    }

    async getTransactionById(transactionId: string): Promise<typeof Transaction | Error> {
        const retrieveTransactionError = new Error("Invalid transaction ID");
        if (!transactionId)
            return retrieveTransactionError.message

        const transaction = await Transaction.findOne(
            { where: { id: transactionId } }
        )

        if (!transaction)
            return retrieveTransactionError;

        return transaction;
    }

    async createTransaction(value: number, type: string): Promise<typeof Transaction | Error> {

        if (!possibleTransactionTypes.includes(type)) {
            const createTransactionError = new Error("Invalid type, the type must be in this list `")
        }

        return await Transaction.create(
            {
                value: value,
                type: type
            }
        );
    }

    async updateTransaction(transactionId: string, value: number, type: string): Promise<typeof Transaction | Error> {
        const retrievedTransaction = Transaction.findOne(
            { where: { id: transactionId } }
        )
        const notFoundError = new Error(`Transaction with id ${transactionId} does not exists`);

        if (!retrievedTransaction)
            return notFoundError.message;

        await retrievedTransaction.update(
            {
                value: value,
                type: type
            }
        );

        await retrievedTransaction.save();

        return retrievedTransaction;
    }

    async deleteTransaction(transactionId: string): Promise< void | string> {
        const transactionToDelete = Transaction.findOne(
            { where: { id: transactionId } }
        );

        const notFoundError = new Error(`Transaction with id ${transactionId} does not exists`);

        if (!transactionToDelete)
            return notFoundError.message;
        
        await transactionToDelete.destroy();
    }

}